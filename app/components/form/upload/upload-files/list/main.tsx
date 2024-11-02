import { ContextForFileElement } from '@/architecture/model/elements/file/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { ContextForUploadsController } from '@/external/controller/s3/multiple/main';
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
          <ContextForFileElement.Provider value={file} key={file.id}>
            <UploadedFileEntry key={file.id}>
              <UploadedFileEntryBody />
              <UploadedEntryRemove i={i} />
            </UploadedFileEntry>
          </ContextForFileElement.Provider>
        ))}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
