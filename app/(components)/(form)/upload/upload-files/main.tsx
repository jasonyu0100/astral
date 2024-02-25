import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { createFileObj } from '@/graphql/mutations';
import {
  FileObj,
  FileVariant,
  getFileAccepts,
  getFileVariantFromMimeType,
} from '@/(logic)/internal/data/infra/model/resource/file/main';
import React, { useEffect, useState } from 'react';
import { UploadedFileEntry } from '../upload-file/uploaded-file/entry/main';
import { UploadedFile } from '../upload-file/uploaded-file/main';
import { UploadedFileRemove } from '../upload-file/uploaded-file/remove/main';
import { generateUploadURL } from '@/(logic)/external/aws/s3/main';
import { UploadFilesPlaceholder } from './placeholder/main';

export function FormUploadFiles({
  onChange,
  label,
  variant,
}: {
  onChange: (files: FileObj[]) => void;
  label: string;
  variant?: FileVariant;
}) {
  const [files, changeFiles] = useState<FileObj[]>([]);

  useEffect(() => {
    onChange(files);
  }, [files]);

  const handleFileChange = async (event: any) => {
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
  };

  return (
    <div className='flex flex-col bg-white'>
      <label
        htmlFor='fileInput'
        className='mb-1 w-full text-xs font-bold text-slate-400'
      >
        {label}
      </label>
      <div className='relative h-[200px] border-b border-black'>
        <input
          type='file'
          id='fileInput'
          multiple
          className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
          onChange={(e) => handleFileChange(e)}
          accept={getFileAccepts(variant || FileVariant.ANY)}
        />
        <UploadFilesPlaceholder />
      </div>
      {files.length > 0 && (
        <>
          <div className='mt-[1rem] flex w-full flex-col divide-y-[1px] divide-slate-300'>
            {files.map((file, i) => (
              // eslint-disable-next-line react/jsx-key
              <UploadedFile>
                <UploadedFileEntry file={file} />
                <UploadedFileRemove
                  onClick={() => {
                    changeFiles((prev) =>
                      prev.filter((_, index) => index !== i),
                    );
                  }}
                />
              </UploadedFile>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
