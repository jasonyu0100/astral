const loadEnvConfig = require('@next/env').loadEnvConfig;
loadEnvConfig('./');

// create-npmrc.js
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Extract necessary values from environment variables
const authToken = process.env.NPM_AUTH_TOKEN;

// Create the content for the .npmrc file
const npmrcContent = `
//registry.npmjs.org/:_authToken=${authToken}
registry=https://registry.npmjs.com/
@cosmos-dev:registry=https://registry.npmjs.org/
`;

// Write the content to the .npmrc file
fs.writeFileSync('.npmrc', npmrcContent);

console.log('.npmrc file created successfully.');
