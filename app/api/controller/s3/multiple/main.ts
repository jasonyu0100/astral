import { generateUploadURL } from '@/api/aws/s3/main';
import {
  FileElement,
  FileElementVariant,
  getFileVariantFromMimeType,
} from '@/architecture/model/elements/file/main';
import { ChangeEvent, createContext, useState } from 'react';

interface Actions {
  clearFile: (i: number) => void;
  uploadFiles: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export const ContextForUploadsController = createContext({} as Controller);

interface Controller {
  files: FileElement[];
  actions: Actions;
  variant?: FileElementVariant;
}

export const useS3UploadsController = (
  variant?: FileElementVariant,
): Controller => {
  const [files, changeFiles] = useState<FileElement[]>([]);

  const actions: Actions = {
    clearFile: (i) =>
      changeFiles((prev) => prev.filter((_, index) => index !== i)),
    uploadFiles: async (event) => {
      // get file attributes
      const files: File[] = event.target.files
        ? Array.from(event.target.files)
        : [];
      const payload: FileElement[] = [];
      for (const file of files) {
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
        const filePayload: FileElement = {
          id: crypto.randomUUID(),
          src: fileSrc,
          title: fileName,
          ext: fileType,
          size: fileSize,
          variant: getFileVariantFromMimeType(fileType),
        };

        changeFiles((prev) => [...prev, filePayload]);
        payload.push(filePayload);
      }
    },
  };

  return {
    files,
    variant,
    actions,
  };
};
