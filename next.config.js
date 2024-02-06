/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_APIKEY,
  },
};

module.exports = nextConfig;
