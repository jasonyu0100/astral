#!/bin/bash

# Run amplify codegen
amplify codegen

# Check if the codegen process was successful
if [ $? -eq 0 ]; then
    # Copy the folder server/graphql to app/graphql
    cp -r server/graphql app/
    echo "Code generation and folder copy completed successfully."
else
    echo "Error: Code generation failed. Please check the logs for more information."
fi