/**
 * @format
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '',
  output: 'export',
  images: {
    unoptimized: true,
    qualities: [100],
  },
};

export default nextConfig;
