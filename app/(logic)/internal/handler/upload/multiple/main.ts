import { createContext, useState } from 'react';
import {
  FileObj,
  FileVariant,
  getFileVariantFromMimeType,
} from '../../../../../(types)/model/resource/file/main';
import { amplifyClient } from '@/(api)/aws/graphql/main';
import { generateUploadURL } from '@/(api)/aws/s3/main';
import { createFileObj } from '@/graphql/mutations';

export interface UploadsActions {
  clearFile: (i: number) => void;
  uploadFiles: (event: any) => Promise<void>;
}

export interface UploadsHandlerObj {
  files: FileObj[];
  variant?: FileVariant;
  uploadsActions: UploadsActions;
}

export const UploadsHandlerContext = createContext({} as UploadsHandlerObj);

export const useUploadsHandler = (variant ?: FileVariant) : UploadsHandlerObj => {
  const [files, changeFiles] = useState<FileObj[]>([]);

  const uploadsActions: UploadsActions = {
    clearFile: (i) =>
      changeFiles((prev) => prev.filter((_, index) => index !== i)),
    uploadFiles: async (event: any) => {
      // get file attributes
      const files: any[] = Array.from(event.target.files);
      const payload: FileObj[] = [];
      for (let file of files) {
        const fileName = file.name;
        const fileType = file.type;
        const fileSize = file.size;

        // get secure url from our server
        const uploadUrl = await generateUploadURL();

        // post the image directly to the s3 bucket
        await fetch(uploadUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: file,
        });
        const fileSrc = uploadUrl.split('?')[0];

        // post request to my server to store any extra data
        const filePayload: FileObj = {
          id: crypto.randomUUID(),
          src: fileSrc,
          title: fileName,
          fileType: fileType,
          size: fileSize,
          variant: getFileVariantFromMimeType(fileType),
        };

        await amplifyClient.graphql({
          query: createFileObj,
          variables: {
            input: {
              title: filePayload.title,
              src: filePayload.src,
              fileType: filePayload.fileType,
              size: filePayload.size,
              variant: filePayload.variant,
            },
          },
        });

        changeFiles((prev) => [...prev, filePayload]);
        payload.push(filePayload);
      }
    },
  };

  return {
    files,
    variant,
    uploadsActions,
  };
};
