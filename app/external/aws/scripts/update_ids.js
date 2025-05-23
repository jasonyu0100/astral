const AWS = require('aws-sdk');

// Configure AWS SDK with credentials and region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-2',
});

// Create a DynamoDB Document Client
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Function to update items in DynamoDB
const updateItems = async (itemIdsToUpdate) => {
  for (const itemId of itemIdsToUpdate) {
    const updateParams = {
      TableName: 'ResourceObjTable',
      Key: { id: itemId },
      UpdateExpression: 'SET userId = :userId',
      ExpressionAttributeValues: {
        ':userId': 'c14cfb7c-f645-4450-97cd-bac9cbf0e02b',
      },
    };

    try {
      await dynamodb.update(updateParams).promise();
      console.log(`Item ${itemId} updated successfully.`);
    } catch (error) {
      console.error(`Error updating item ${itemId}:`, error);
    }
  }
};

// Define the list of item IDs to update
const itemIdsToUpdate = [
  '64a6fc1d-d364-4b49-b71d-66e690dd2986',
  '2a4d03f3-e176-4dd6-aa54-0940c923c414',
  '601f4f44-05fa-4d22-865f-3cfb16201943',
  '4a217c40-d22e-4e1b-8e85-a4d6b089ba14',
  'a30f8c86-7d57-4b5a-844e-09ab2942ab2f',
];

// Execute the updateItems function with the specified item IDs and newUserId
updateItems(itemIdsToUpdate);
