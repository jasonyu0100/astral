import {
  UploadsHandlerContext,
  useS3UploadsController,
} from '@/(api)/(controller)/s3/multiple/main';
import {
  FileElem,
  FileElemVariant,
} from '@/(server)/(model)/elements/file/main';
import { useEffect } from 'react';
import { UploadFileLabel } from '../common/label/main';
import { UploadFilesArea } from './area/main';
import { UploadFilesList } from './list/main';

export function FormUploadFiles({
  onChange,
  label,
  variant,
}: {
  onChange: (files: FileElem[]) => void;
  label: string;
  variant?: FileElemVariant;
}) {
  const uploadsHandler = useS3UploadsController(variant);

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
