import { effectStyles } from '@/(common)/styles/data';
import { amplifyClient } from '@/client';
import { createFileObj } from '@/graphql/mutations';
import { FileObj } from '@/tables/file/main';
import React, { useEffect, useState } from 'react';
import { UploadedFileInfo } from '../upload-file/uploaded-file/info/main';
import { UploadedFile } from '../upload-file/uploaded-file/main';
import { UploadedFileRemove } from '../upload-file/uploaded-file/remove/main';

export function FormUploadFiles({
  onChange,
  label,
}: {
  onChange: (files: FileObj[]) => void;
  label: string;
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
      const name = file.name;
      const fileType = file.type;
      const size = file.size;

      // get secure url from our server
      const { url } = await fetch('/s3Url').then((res) => res.json());

      // post the image directly to the s3 bucket
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: file,
      });
      const fileSrc = url.split('?')[0];

      // post request to my server to store any extra data
      const filePayload: FileObj = {
        id: crypto.randomUUID(),
        src: fileSrc,
        name: name,
        fileType: fileType,
        size: size,
      };

      await amplifyClient.graphql({
        query: createFileObj,
        variables: {
          input: {
            name: filePayload.name,
            src: filePayload.src,
            fileType: filePayload.fileType,
            size: filePayload.size,
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
      <div className='relative h-[200px] border-b border-black bg-slate-50'>
        <input
          type='file'
          id='fileInput'
          multiple
          className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
          onChange={(e) => handleFileChange(e)}
        />
        <div className='flex h-full w-full flex-row items-center space-x-[1rem]'>
          <div className='flex h-full w-[100px] items-center justify-center'>
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
                <rect width='48' height='48' className='fill-slate-400' />
              </mask>
              <g mask='url(#mask0_2959_7)'>
                <path
                  d='M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z'
                  fill='#3B82F6'
                  className='fill-slate-400'
                />
              </g>
            </svg>
          </div>
          <p className='text-lg font-bold text-slate-500'>
            Upload your files here
          </p>
        </div>
      </div>
      {files.length > 0 && (
        <>
          <div className='mt-[1rem] flex w-full flex-col divide-y-[1px] divide-slate-300'>
            {files.map((file, i) => (
              <UploadedFile>
                <UploadedFileInfo file={file} />
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
