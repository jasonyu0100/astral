import { getFileAccepts, FileElemVariant } from "@/(model)/elements/file/main";
import { UploadsHandlerContext } from "@/(controller)/elements/file/(upload)/multiple/main";
import { useContext } from "react";

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
