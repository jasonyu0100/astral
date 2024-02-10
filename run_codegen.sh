#!/bin/bash

echo "AWS Credential Configuration Script"

# Specify the path to the .env.local file
ENV_FILE=".env.local"

# Check if the .env.local file exists
if [ -f "$ENV_FILE" ]; then
    # Export variables from .env.local
    export $(grep -v '^#' "$ENV_FILE" | xargs -0)

    # Validate if AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are set
    if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
        echo "Error: AWS access key ID and secret access key cannot be empty."
        exit 1
    fi

    # Write credentials to ~/.aws/credentials file
    echo "[default]" > ~/.aws/credentials
    echo "aws_access_key_id = $AWS_ACCESS_KEY_ID" >> ~/.aws/credentials
    echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/credentials

    echo "AWS credentials configured successfully in ~/.aws/credentials"
else
    echo "Error: $ENV_FILE not found. Please make sure the file exists."
fi


npm install -g @aws-amplify/cli
npx @aws-amplify/cli codegen

if [ $? -eq 0 ]; then
    cp -r app/graphql server/
    echo "Code generation and folder copy completed successfully."
else
    echo "Error: Code generation failed. Please check the logs for more information."
fi