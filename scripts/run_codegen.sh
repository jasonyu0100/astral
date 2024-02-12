#!/bin/bash

echo "AWS Credential Configuration Script"

npx @aws-amplify/cli codegen

if [ $? -eq 0 ]; then
    cp -r app/graphql server/
    echo "Code generation and folder copy completed successfully."
else
    echo "Error: Code generation failed. Please check the logs for more information."
fi