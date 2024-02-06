const AWS = require('aws-sdk');

// Configure AWS SDK with credentials and region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-2',
});

// Create a DynamoDB Document Client and define the table name
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'FileObjTable';

// Function to update a single item by ID
const updateItem = async (itemId) => {
  const updateParams = {
    TableName: tableName,
    Key: { id: itemId },
    UpdateExpression: 'SET variant = :variant',
    ExpressionAttributeValues: {
      ':variant': 'VISUAL',
    },
  };

  try {
    await dynamodb.update(updateParams).promise();
    console.log(`Item ${itemId} updated successfully.`);
  } catch (error) {
    console.error(`Error updating item ${itemId}:`, error);
  }
};

const insertItem = async (itemData) => {
  const params = {
    TableName: tableName,
    Item: itemData,
  };

  try {
    await dynamodb.put(params).promise();
    console.log('Item inserted successfully.');
  } catch (error) {
    console.error('Error inserting item:', error);
  }
};

const deleteItem = async (itemId) => {
  const params = {
    TableName: tableName,
    Key: {
      id: itemId,
    },
  };

  try {
    await dynamodb.delete(params).promise();
    console.log(`Item with ID ${itemId} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting item with ID ${itemId}:`, error);
  }
};

const deleteItemField = async (itemId, fieldToDelete) => {
  const updateParams = {
    TableName: tableName,
    Key: { id: itemId },
    UpdateExpression: `REMOVE ${fieldToDelete}`,
  };

  try {
    await dynamodb.update(updateParams).promise();
    console.log(
      `Field '${fieldToDelete}' deleted successfully from item ${itemId}.`,
    );
  } catch (error) {
    console.error(
      `Error deleting field '${fieldToDelete}' from item ${itemId}:`,
      error,
    );
  }
};

// Function to update all items in the table
const updateAllItems = async () => {
  const scanParams = {
    TableName: tableName,
  };

  try {
    const scanResult = await dynamodb.scan(scanParams).promise();

    // Update each item in the result set
    for (const item of scanResult.Items) {
      const itemId = item.id;
      const jsonItem = JSON.parse(JSON.stringify(item));
      jsonItem['fileType'] = jsonItem['type'];
      delete jsonItem['type'];
      console.log(jsonItem);
      await deleteItem(itemId);
      await insertItem(jsonItem);
      // await updateItem(itemId);
      // await deleteItemField(itemId, 'type');
    }

    console.log('All items updated successfully.');
  } catch (error) {
    console.error('Error scanning and updating items:', error);
  }
};

// Execute the updateAllItems function
updateAllItems();
