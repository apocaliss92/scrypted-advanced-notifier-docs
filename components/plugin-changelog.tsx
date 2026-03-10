'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

type PluginChangelogProps = {
  slug: string;
};

export function PluginChangelog({ slug }: PluginChangelogProps) {
  const [changelog, setChangelog] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/plugin-info/${slug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.changelog) {
          // Strip <details><summary>Changelog</summary>...</details> wrapper if present
          let cl = data.changelog;
          cl = cl.replace(/^\s*<details>\s*\n*\s*<summary>[^<]*<\/summary>\s*\n*/i, '');
          cl = cl.replace(/<\/details>\s*$/i, '');
          cl = cl.replace(/^#\s+changelog\s*\n*/i, '');
          setChangelog(cl);
        }
      })
      .catch(() => {});
  }, [slug]);

  if (!changelog) return null;

  return (
    <section className="mt-10">
      <h2>Changelog</h2>
      <div className="prose prose-sm dark:prose-invert max-h-96 overflow-y-auto [&_ul]:my-2 [&_li]:my-0">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {changelog}
        </ReactMarkdown>
      </div>
    </section>
  );
}
