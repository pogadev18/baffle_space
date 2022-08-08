/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

const bundleAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig = {
  reactStrictMode: true,
  env: {
    MORALIS_APP_ID: process.env.MORALIS_APP_ID,
    MORALIS_SERVER_URL: process.env.MORALIS_SERVER_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
};

module.exports = withPlugins([bundleAnalyzer], nextConfig);
