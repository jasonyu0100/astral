import { FileObjContext } from '@/(model)/resource/file/main';
import { UploadsHandlerContext } from '@/(controller)/upload/multiple/main';
import { useContext } from 'react';
import { UploadedFileEntryBody } from '../../common/entry/body/main';
import { UploadedFileEntry } from '../../common/entry/main';
import { UploadedEntryRemove } from './remove/main';

export function UploadFilesList() {
  const uploadsHandler = useContext(UploadsHandlerContext);

  return (
    <div className='mt-[1rem] flex w-full flex-col divide-y-[1px] divide-slate-300'>
      {uploadsHandler.files.map((file, i) => (
        <FileObjContext.Provider value={file} key={file.id}>
          <UploadedFileEntry key={file.id}>
            <UploadedFileEntryBody />
            <UploadedEntryRemove i={i} />
          </UploadedFileEntry>
        </FileObjContext.Provider>
      ))}
    </div>
  );
}
