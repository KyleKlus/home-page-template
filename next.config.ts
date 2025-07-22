/**
 * @format
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '',
  output: 'export',
  images: { unoptimized: true },
  env: {
    basePath: '',
  },
};

export default nextConfig;
