import {
  FileVariant,
  getFileAccepts,
} from '@/(lgx)/internal/model/resource/file/main';
import {
  UploadHandlerContext,
} from '@/(lgx)/internal/handler/upload/single/main';
import { useContext } from 'react';

export function UploadFileAreaInterface() {
  const uploadHandler = useContext(UploadHandlerContext);

  return (
    <input
      accept={getFileAccepts(uploadHandler.variant || FileVariant.ANY)}
      type='file'
      id='fileInput'
      className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
      onChange={(e) => uploadHandler.uploadActions.uploadFile(e)}
    />
  );
}
