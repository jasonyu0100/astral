import { loadEnvConfig } from '@next/env';
const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig('./', dev);

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

const config: any = {
  API: {
    GraphQL: {
      endpoint: process.env.GRAPHQL_ENDPOINT || '',
      region: 'ap-southeast-2',
      defaultAuthMode: 'apiKey',
      apiKey: process.env.GRAPHQL_APIKEY || '',
    },
  },
};

Amplify.configure(config);

export const amplifyClient = generateClient({ authMode: 'apiKey' });
