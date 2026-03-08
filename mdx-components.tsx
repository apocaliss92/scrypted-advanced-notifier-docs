import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { PluginCard, PluginCards } from '@/components/plugin-card';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    PluginCard,
    PluginCards,
    ...components,
  };
}
