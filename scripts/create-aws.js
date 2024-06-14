const loadEnvConfig = require('@next/env').loadEnvConfig;
loadEnvConfig('./');

// create-npmrc.js
const fs = require('fs');
const dotenv = require('dotenv');
const os = require('os');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Extract necessary values from environment variables
const key = process.env.AWS_ACCESS_KEY_ID;
const secret = process.env.AWS_SECRET_ACCESS_KEY;

// Create the content for the .npmrc file
const awsContent = `
[default]
aws_access_key_id = ${key}
aws_secret_access_key = ${secret}
`;

// Resolve the home directory
const homeDir = os.homedir();

// Specify the file path
const awsCredentialsPath = path.join(homeDir, '.aws', 'credentials');

// Ensure the directory exists
if (!fs.existsSync(path.join(homeDir, '.aws'))) {
  fs.mkdirSync(path.join(homeDir, '.aws'));
}

// Write content to the file
fs.writeFileSync(awsCredentialsPath, awsContent);

console.log('~/.aws/credentials file created successfully');
