import { getFileAccepts, FileVariant } from "@/(logic)/internal/data/infra/model/resource/file/main";
import { UploadsHandlerContext } from "@/(logic)/internal/handler/upload/multiple/main";
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
      accept={getFileAccepts(uploadsHandler.variant || FileVariant.ANY)}
    />
  );
}
