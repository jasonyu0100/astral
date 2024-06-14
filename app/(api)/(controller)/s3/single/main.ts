import { generateUploadURL } from '@/(api)/aws/s3/main';
import {
  FileElem,
  FileElemVariant,
  getFileVariantFromMimeType,
} from '@/(server)/(model)/elements/file/main';
import { ChangeEvent, createContext, useMemo, useState } from 'react';

export interface UploadActions {
  clearFile: () => void;
  uploadFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export interface UploadHandlerObj {
  fileElem: FileElem;
  defaultFileElem?: FileElem;
  variant?: FileElemVariant;
  uploadActions: UploadActions;
}

export const UploadHandlerContext = createContext({} as UploadHandlerObj);

export const useS3UploadController = (
  defaultFileElem?: FileElem,
  variant?: FileElemVariant,
): UploadHandlerObj => {
  const [file, changeFile] = useState({} as FileElem);

  const uploadActions: UploadActions = {
    clearFile: () => changeFile({} as FileElem),
    uploadFile: async (event) => {
      const files: File[] = event.target.files
        ? Array.from(event.target.files)
        : [];
      const file = files[0];
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
        ext: fileType,
        size: fileSize,
        variant: getFileVariantFromMimeType(fileType),
      };

      changeFile(filePayload);
    },
  };

  useMemo(() => {
    if (defaultFileElem === undefined) return;
    changeFile(defaultFileElem);
  }, [defaultFileElem]);

  return {
    fileElem: file,
    defaultFileElem: defaultFileElem,
    variant,
    uploadActions,
  };
};
