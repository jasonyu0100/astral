import {
  FileObj,
  FileVariant,
} from '@/(types)/model/resource/file/main';
import React, { useEffect } from 'react';
import { UploadFileLabel } from '../common/label/main';
import {
  UploadsHandlerContext,
  useUploadsHandler,
} from '@/(types)/handler/upload/multiple/main';
import { UploadFilesList } from './list/main';
import { UploadFilesArea } from './area/main';

export function FormUploadFiles({
  onChange,
  label,
  variant,
}: {
  onChange: (files: FileObj[]) => void;
  label: string;
  variant?: FileVariant;
}) {
  const uploadsHandler = useUploadsHandler(variant);

  useEffect(() => {
    onChange(uploadsHandler.files);
  }, [uploadsHandler.files]);

  return (
    <UploadsHandlerContext.Provider value={uploadsHandler}>
      <div className='flex flex-col bg-white'>
        <UploadFileLabel>{label}</UploadFileLabel>
        <UploadFilesArea />
        {uploadsHandler.files.length > 0 && <UploadFilesList />}
      </div>
    </UploadsHandlerContext.Provider>
  );
}
