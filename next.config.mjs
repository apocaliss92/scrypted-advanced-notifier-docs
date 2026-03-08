import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const isStaticExport = process.env.OUTPUT_STATIC === 'true';

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  ...(isStaticExport && {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  experimental: { turbo: { root: process.cwd() } },
  ...(!isStaticExport && {
    async rewrites() {
      return [
        {
          source: '/docs/:path*.mdx',
          destination: '/llms.mdx/docs/:path*',
        },
      ];
    },
  }),
};

export default withMDX(config);
