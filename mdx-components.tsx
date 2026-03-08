import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { PluginCard, PluginCards } from '@/components/plugin-card';
import { PluginTitle } from '@/components/plugin-title';
import { PluginChangelog } from '@/components/plugin-changelog';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    PluginCard,
    PluginCards,
    PluginTitle,
    PluginChangelog,
    ...components,
  };
}
