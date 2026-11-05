import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for EdgeOne Pages hosting. The demo rewrite below is kept
  // for local dev / self-hosted parity; on EdgeOne Pages the equivalent rule
  // lives in edgeone.json (Next.js rewrites are not honored by the platform).
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Keep the self-contained static demo addressable as `/demo/` in both
  // development and production. The package itself remains untouched.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      { source: '/demo/', destination: '/demo/index.html' },
      { source: '/demo/chat-board/', destination: '/demo/chat-board/index.html' },
    ];
  },
};

export default nextConfig;
