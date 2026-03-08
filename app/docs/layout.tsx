import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const opts = baseOptions();
  return (
    <DocsLayout tree={source.getPageTree()} {...opts}>
      {children}
    </DocsLayout>
  );
}
