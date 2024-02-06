import { loadEnvConfig } from '@next/env';
import { promisify } from 'util';
import crypto from 'crypto';
import aws from 'aws-sdk';

const randomBytes = promisify(crypto.randomBytes);
const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig('./', dev);

const region = 'ap-southeast-2';
const bucketName = 'cosmos-creative-storage';
const accessKeyId = process.env.S3_ACCESSKEY;
const secretAccessKey = process.env.S3_SECRETKEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

export async function generateUploadURL() {
  const rawBytes = await randomBytes(16);
  const fileName = rawBytes.toString('hex');

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}
