const AWS = require('aws-sdk');

// Configure AWS SDK with credentials and region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-2',
});

// Create a DynamoDB Document Client and define the table name
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'SpaceChapterObjTable';

// Function to update a single item by ID
const updateItem = async (itemId, key, value) => {
  const updateParams = {
    TableName: tableName,
    Key: { id: itemId },
    UpdateExpression: `SET ${key} = :value`,
    ExpressionAttributeValues: {
      ':value': value,
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
    for (const [index, item] of scanResult.Items.entries()) {
      const itemId = item.id;

      const jsonItem = JSON.parse(JSON.stringify(item));
      // BEFORE
      console.log(jsonItem);

      // AFTER
      // jsonItem['thumbnail'] = {
      //   id: '74e51612-b492-4906-b284-4c9bf9c8ae2c',
      //   fileType: 'image/*',
      //   size: 0,
      //   src: 'https://images.unsplash.com/photo-1516571748831-5d81767b788d?ixid=M3w1NTg3OTd8MHwxfHNlYXJjaHwyfHxzdGFyc3xlbnwwfHx8fDE3MDc0MzUwNzF8MA&ixlib=rb-4.0.3',
      //   title: 'silhouette of man looking at milky way',
      //   variant: 'IMAGE',
      // };
      // console.log(jsonItem);

      // CUSTOM UPDATE
      // await deleteItem(itemId);
      // await insertItem(jsonItem);

      // CUSTOM UPDATE TEST
      // delete jsonItem['type'];
      // console.log(jsonItem);

      // FIELD UPDATE
      await updateItem(itemId, 'summary', '');

      // FIELD DELETE
      // await deleteItemField(itemId, 'type');
    }

    console.log('All items updated successfully.');
  } catch (error) {
    console.error('Error scanning and updating items:', error);
  }
};

// Execute the updateAllItems function
updateAllItems();
