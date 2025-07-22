/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  output: 'export',
  images: { unoptimized: true },
  env: {
    basePath: '',
  },
};

module.exports = nextConfig;
