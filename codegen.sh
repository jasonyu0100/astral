#!/bin/bash

# Check the operating system
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    npx @aws-amplify/cli codegen
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    amplify codegen
else
    echo "Unsupported operating system: $OSTYPE"
    exit 1
fi

# Check if the codegen process was successful
if [ $? -eq 0 ]; then
    # Copy the folder server/graphql to app/graphql
    cp -r server/graphql app/
    echo "Code generation and folder copy completed successfully."
else
    echo "Error: Code generation failed. Please check the logs for more information."
fi