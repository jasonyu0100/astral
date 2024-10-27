import { ContextForUploadsController } from '@/api/controller/s3/multiple/main';
import {
  FileElementVariant,
  getFileAccepts,
} from '@/server/model/elements/file/main';
import { useContext } from 'react';

export function UploadFilesAreaInterface() {
  const uploadsHandler = useContext(ContextForUploadsController);
  return (
    <input
      type='file'
      id='fileInput'
      multiple
      className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
      onChange={(e) => uploadsHandler.actions.uploadFiles(e)}
      accept={getFileAccepts(uploadsHandler.variant || FileElementVariant.ANY)}
    />
  );
}
