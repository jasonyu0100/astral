import { createContext, useMemo, useState } from 'react';
import {
  FileObj,
  FileVariant,
  getFileVariantFromMimeType,
} from '../../../../../(types)/model/resource/file/main';
import { amplifyClient } from '@/(api)/aws/graphql/main';
import { generateUploadURL } from '@/(api)/aws/s3/main';
import { createFileObj } from '@/graphql/mutations';

export interface UploadActions {
  clearFile: () => void;
  uploadFile: (event: any) => Promise<void>;
}

export interface UploadHandlerObj {
  file: FileObj;
  defaultFile?: FileObj;
  variant?: FileVariant;
  uploadActions: UploadActions;
}

export const UploadHandlerContext = createContext({} as UploadHandlerObj);

export const useUploadHandler = (
  defaultFile?: FileObj,
  variant?: FileVariant,
) : UploadHandlerObj => {
  const [file, changeFile] = useState({} as FileObj);

  const uploadActions: UploadActions = {
    clearFile: () => changeFile({} as FileObj),
    uploadFile: async (event: any) => {
      const file = event.target.files[0];
      const fileName = file.name;
      const fileType = file.type;
      const fileSize = file.size;

      const uploadUrl = await generateUploadURL();

      await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: file,
      });

      const fileSrc = uploadUrl.split('?')[0];

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

      changeFile(filePayload);
    },
  };

  useMemo(() => {
    if (defaultFile === undefined) return;
    changeFile(defaultFile);
  }, [defaultFile]);

  return {
    file,
    defaultFile,
    variant,
    uploadActions,
  };
};
