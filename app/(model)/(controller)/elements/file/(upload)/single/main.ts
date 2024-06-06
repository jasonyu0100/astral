import { createContext, useMemo, useState } from 'react';
import {
  FileElem,
  FileElemVariant,
  getFileVariantFromMimeType,
} from '../../../../../elements/file/main';
import { amplifyClient } from '@/(api)/aws/graphql/main';
import { generateUploadURL } from '@/(api)/aws/s3/main';

export interface UploadActions {
  clearFile: () => void;
  uploadFile: (event: any) => Promise<void>;
}

export interface UploadHandlerObj {
  file: FileElem;
  defaultFile?: FileElem;
  variant?: FileElemVariant;
  uploadActions: UploadActions;
}

export const UploadHandlerContext = createContext({} as UploadHandlerObj);

export const useUploadHandler = (
  defaultFile?: FileElem,
  variant?: FileElemVariant,
) : UploadHandlerObj => {
  const [file, changeFile] = useState({} as FileElem);

  const uploadActions: UploadActions = {
    clearFile: () => changeFile({} as FileElem),
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

      const filePayload: FileElem = {
        id: crypto.randomUUID(),
        src: fileSrc,
        title: fileName,
        fileType: fileType,
        size: fileSize,
        variant: getFileVariantFromMimeType(fileType),
      };

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
