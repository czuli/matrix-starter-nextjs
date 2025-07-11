import type { NextConfig } from "next";

const repo = 'matrix-starter-nextjs';
const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
