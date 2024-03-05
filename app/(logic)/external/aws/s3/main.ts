import { promisify } from 'util';
import crypto from 'crypto';
import aws from 'aws-sdk';

const randomBytes = promisify(crypto.randomBytes);

const s3 = new aws.S3({
  region: 'ap-southeast-2',
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  signatureVersion: 'v4',
});

export async function generateUploadURL() {
  const rawBytes = await randomBytes(16);
  const fileName = rawBytes.toString('hex');

  const params = {
    Bucket: 'cosmos-creative-storage',
    Key: fileName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}
