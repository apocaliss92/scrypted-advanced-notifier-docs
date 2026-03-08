'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';

const PLUGIN_ICONS: Record<string, string> = {
  'advanced-notifier': '/assets/icon.png',
  'frigate-bridge': '/assets/frigate.png',
  'reolink-native': '/assets/reolink.svg',
  zentik: '/assets/zentik.png',
  ntfy: '/assets/ntfy.svg',
  yamnet: '/assets/yamnet.svg',
};

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
  const iconSrc = PLUGIN_ICONS[slug];

  useEffect(() => {
    fetch(`/api/plugin-info/${slug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => data?.version && setVersion(data.version))
      .catch(() => {});
  }, [slug]);

  return (
    <Tag className={cn('flex flex-wrap items-center gap-2', className)}>
      {iconSrc && (
        <Image src={iconSrc} alt="" width={32} height={32} className="rounded-lg shrink-0" />
      )}
      <span>{title}</span>
      {version && (
        <span className="text-base font-mono font-normal text-fd-muted-foreground">
          v{version}
        </span>
      )}
    </Tag>
  );
}
