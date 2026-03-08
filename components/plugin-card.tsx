'use client';

import { useEffect, useState } from 'react';
import Link from 'fumadocs-core/link';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { cn } from '@/lib/cn';

export function PluginCards({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('grid grid-cols-2 gap-3 @container @max-lg:col-span-full', className)}>
      {children}
    </div>
  );
}

type PluginCardProps = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export function PluginCard({ slug, title, description, href }: PluginCardProps) {
  const [info, setInfo] = useState<{ version: string | null; changelog: string | null } | null>(null);

  useEffect(() => {
    fetch(`/api/plugin-info/${slug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then(setInfo)
      .catch(() => setInfo({ version: null, changelog: null }));
  }, [slug]);

  return (
    <div
      data-card
      className={cn(
        'flex flex-col min-w-0 rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors',
        'hover:bg-fd-accent/80',
        '@max-lg:col-span-full'
      )}
    >
      <Link href={href} className="block -m-4 p-4 rounded-t-xl hover:no-underline shrink-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="not-prose mb-1 text-sm font-medium flex-1 min-w-0 truncate">{title}</h3>
          {info?.version && (
            <span className="shrink-0 text-xs font-mono px-2 py-0.5 rounded-md bg-fd-muted text-fd-muted-foreground">
              v{info.version}
            </span>
          )}
        </div>
        <p className="my-0! text-sm text-fd-muted-foreground">{description}</p>
      </Link>
      {info?.changelog && (
        <Accordions type="single" defaultValue="" className="mt-2 shrink-0 w-full border-0 rounded-lg overflow-hidden">
          <Accordion title="Changelog" value={`changelog-${slug}`}>
            <div className="prose prose-sm dark:prose-invert max-h-64 overflow-y-auto text-xs min-w-0 [&_ul]:my-1 [&_li]:my-0">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {info.changelog}
              </ReactMarkdown>
            </div>
          </Accordion>
        </Accordions>
      )}
    </div>
  );
}
