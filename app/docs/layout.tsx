import Link from 'next/link';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const opts = baseOptions();
  return (
    <DocsLayout
      tree={source.getPageTree()}
      sidebar={{
        banner: (
          <Link
            href="/docs"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            All Plugins
          </Link>
        ),
      }}
      {...opts}
    >
      {children}
    </DocsLayout>
  );
}
