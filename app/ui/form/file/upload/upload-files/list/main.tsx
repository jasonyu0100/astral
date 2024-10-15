import { ContextForFileElem } from '@/(server)/model/elements/file/main';
import { ContextForUploadsController } from '@/api/controller/s3/multiple/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { UploadedFileEntryBody } from '../../common/entry/body/main';
import { UploadedFileEntry } from '../../common/entry/main';
import { UploadedEntryRemove } from './remove/main';

export function UploadFilesList() {
  const uploadsHandler = useContext(ContextForUploadsController);

  return (
    <GlassWindowFrame>
      <GlassWindowContents className='flex flex-col'>
        {uploadsHandler.files.map((file, i) => (
          <ContextForFileElem.Provider value={file} key={file.id}>
            <UploadedFileEntry key={file.id}>
              <UploadedFileEntryBody />
              <UploadedEntryRemove i={i} />
            </UploadedFileEntry>
          </ContextForFileElem.Provider>
        ))}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
