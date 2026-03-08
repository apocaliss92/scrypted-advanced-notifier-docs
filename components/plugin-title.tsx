'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

type PluginTitleProps = {
  slug: string;
  /** Main title text (e.g. "Advanced Notifier" or "Getting Started") */
  title: string;
  /** Optional: render as heading level. Default: h1 */
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

export function PluginTitle({ slug, title, as: Tag = 'h1', className }: PluginTitleProps) {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/plugin-info/${slug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => data?.version && setVersion(data.version))
      .catch(() => {});
  }, [slug]);

  return (
    <Tag className={cn('flex flex-wrap items-baseline gap-2', className)}>
      <span>{title}</span>
      {version && (
        <span className="text-base font-mono font-normal text-fd-muted-foreground">
          v{version}
        </span>
      )}
    </Tag>
  );
}
