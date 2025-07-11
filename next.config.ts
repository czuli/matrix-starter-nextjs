import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/matrix-starter-nextjs`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
