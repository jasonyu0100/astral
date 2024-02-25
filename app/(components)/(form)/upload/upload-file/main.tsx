import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import {
  FileObj,
  FileVariant,
  getFileAccepts,
  getFileVariantFromMimeType,
} from '@/(logic)/internal/data/infra/model/resource/file/main';
import React, { useEffect, useState } from 'react';
import { UploadedFile } from './uploaded-file/main';
import { UploadedFileEntry } from './uploaded-file/entry/main';
import { UploadedFileRemove } from './uploaded-file/remove/main';
import { generateUploadURL } from '@/(logic)/external/aws/s3/main';
import { createFileObj } from '@/graphql/mutations';
import { UploadFilePlaceholder } from './placeholder/main';

export function FormUploadFile({
  defaultFile,
  onChange,
  label,
  variant,
}: {
  defaultFile?: FileObj;
  onChange: (file: FileObj) => void;
  label: string;
  variant?: FileVariant;
}) {
  const [file, changeFile] = useState({} as FileObj);

  useEffect(() => {
    if (defaultFile === undefined) return;
    changeFile(defaultFile);
  }, [defaultFile]);

  useEffect(() => {
    onChange(file);
  }, [file]);

  const handleFileChange = async (event: any) => {
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
  };

  return (
    <div className='flex flex-col bg-white'>
      <label
        htmlFor='fileInput'
        className='mb-1 w-full text-xs font-bold text-slate-400'
      >
        {label}
      </label>
      {file.id === undefined && (
        <div className='relative mb-3 h-[100px] border-b border-black p-4'>
          <input
            accept={getFileAccepts(variant || FileVariant.ANY)}
            type='file'
            id='fileInput'
            className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
            onChange={(e) => handleFileChange(e)}
          />
          <UploadFilePlaceholder />
        </div>
      )}
      {file.id !== undefined && (
        <UploadedFile>
          <UploadedFileEntry file={file} />
          <UploadedFileRemove
            onClick={() => {
              changeFile({} as FileObj);
            }}
          />
        </UploadedFile>
      )}
    </div>
  );
}
