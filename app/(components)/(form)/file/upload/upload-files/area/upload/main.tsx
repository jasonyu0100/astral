import { UploadsHandlerContext } from '@/(api)/(controller)/s3/multiple/main';
import {
  FileElemVariant,
  getFileAccepts,
} from '@/(server)/(model)/elements/file/main';
import { useContext } from 'react';

export function UploadFilesAreaInterface() {
  const uploadsHandler = useContext(UploadsHandlerContext);
  return (
    <input
      type='file'
      id='fileInput'
      multiple
      className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
      onChange={(e) => uploadsHandler.uploadsActions.uploadFiles(e)}
      accept={getFileAccepts(uploadsHandler.variant || FileElemVariant.ANY)}
    />
  );
}
