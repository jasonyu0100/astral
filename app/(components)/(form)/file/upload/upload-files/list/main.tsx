import { ContextForUploadsController } from '@/(api)/(controller)/s3/multiple/main';
import { ContextForFileElem } from '@/(server)/(model)/elements/file/main';
import { useContext } from 'react';
import { UploadedFileEntryBody } from '../../common/entry/body/main';
import { UploadedFileEntry } from '../../common/entry/main';
import { UploadedEntryRemove } from './remove/main';

export function UploadFilesList() {
  const uploadsHandler = useContext(ContextForUploadsController);

  return (
    <div className='mt-[1rem] flex w-full flex-col divide-y-[1px] divide-slate-300'>
      {uploadsHandler.files.map((file, i) => (
        <ContextForFileElem.Provider value={file} key={file.id}>
          <UploadedFileEntry key={file.id}>
            <UploadedFileEntryBody />
            <UploadedEntryRemove i={i} />
          </UploadedFileEntry>
        </ContextForFileElem.Provider>
      ))}
    </div>
  );
}
