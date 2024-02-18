import { amplifyClient } from '@/(dev)/(aws)/graphql/main';
import { FileObj, FileVariant, getFileAccepts, getFileVariantFromMimeType } from '@/(ouros)/(model)/resource/file/main';
import React, { useEffect, useState } from 'react';
import { UploadedFile } from './uploaded-file/main';
import { UploadedFileInfo } from './uploaded-file/info/main';
import { UploadedFileRemove } from './uploaded-file/remove/main';
import { generateUploadURL } from '@/(dev)/(aws)/s3/main';
import { createFileObj } from '@/graphql/mutations';

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
  }, [defaultFile])

  useEffect(() => {
    onChange(file);
  }, [file]);

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileType = file.type;
    const fileSize = file.size;

    const uploadUrl = await generateUploadURL()

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
      variant: getFileVariantFromMimeType(fileType)
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
        <div className='relative mb-3 h-[100px] border-b border-black bg-slate-50 p-4'>
          <input
            accept={getFileAccepts(variant || FileVariant.ANY)}
            type='file'
            id='fileInput'
            className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
            onChange={(e) => handleFileChange(e)}
          />
          <div className='flex h-full w-full flex-row items-center space-x-[1rem]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[3rem] w-[3rem]'
              viewBox='0 0 24 24'
              fill='none'
            >
              <mask
                id='mask0_2959_7'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' className='fill-slate-400' />
              </mask>
              <g mask='url(#mask0_2959_7)'>
                <path
                  d='M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z'
                  className='fill-slate-400'
                />
              </g>
            </svg>
            <p className='mt-1 text-lg font-bold text-slate-500'>
              Upload your file here
            </p>
          </div>
        </div>
      )}
      {file.id !== undefined && (
        <UploadedFile>
          <UploadedFileInfo file={file} />
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
