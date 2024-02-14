const { loadEnvConfig } = require('@next/env');
loadEnvConfig('.');

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    GRAPHQL_APIKEY: process.env.GRAPHQL_APIKEY,
    S3_ACCESSKEY: process.env.S3_ACCESSKEY,
    S3_SECRETKEY: process.env.S3_SECRETKEY,
    GOOGLE_AUTH_APIKEY: process.env.GOOGLE_AUTH_APIKEY,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    OPEN_AI_APIKEY: process.env.OPEN_AI_APIKEY,
    UNSPLASH_APIKEY: process.env.UNSPLASH_APIKEY,
    UNSPLASH_SECRET: process.env.UNSPLASH_SECRET,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  },
};

module.exports = nextConfig;
