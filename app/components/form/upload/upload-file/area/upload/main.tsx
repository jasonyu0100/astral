import {
  FileElementVariant,
  getFileAccepts,
} from '@/architecture/model/elements/file/main';
import { UploadHandlerContext } from '@/external/controller/s3/single/main';
import { useContext } from 'react';

export function UploadFileAreaInterface() {
  const uploadHandler = useContext(UploadHandlerContext);

  return (
    <input
      accept={getFileAccepts(FileElementVariant.ANY)}
      type='file'
      id='fileInput'
      className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
      onChange={(e) => uploadHandler.uploadActions.uploadFile(e)}
    />
  );
}
