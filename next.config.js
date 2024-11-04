/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires

const { loadEnvConfig } = require('@next/env');
loadEnvConfig('.');

// Merge with your existing nextConfig
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    // Ignore node-specific modules when bundling for the browser
    // https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      'onnxruntime-node$': false,
    };
    return config;
  },
  env: {
    LIVE_MODE: process.env.LIVE_MODE,
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    GRAPHQL_APIKEY: process.env.GRAPHQL_APIKEY,
    GRAPHQL_REALTIME: process.env.GRAPHQL_REALTIME,
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    S3_SECRET_KEY: process.env.S3_SECRET_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    OPEN_AI_APIKEY: process.env.OPEN_AI_APIKEY,
    UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY,
    UNSPLASH_SECRET: process.env.UNSPLASH_SECRET,
    STRIPE_PK_TEST: process.env.STRIPE_PK_TEST,
    STRIPE_SK_TEST: process.env.STRIPE_SK_TEST,
    STRIPE_PK_LIVE: process.env.STRIPE_PK_LIVE,
    STRIPE_SK_LIVE: process.env.STRIPE_SK_LIVE,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    NPM_AUTH_TOKEN: process.env.NPM_AUTH_TOKEN,
    GOOGLE_AUTH_API_KEY: process.env.GOOGLE_AUTH_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_AUTH_CLIENT_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
  },
};

// Export the configuration by wrapping it with withPWA
module.exports = nextConfig;
