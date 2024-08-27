import { ContextForFileElem } from '@/(server)/model/elements/file/main';
import { ContextForUploadsController } from '@/api/controller/s3/multiple/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { UploadedFileEntryBody } from '../../common/entry/body/main';
import { UploadedFileEntry } from '../../common/entry/main';
import { UploadedEntryRemove } from './remove/main';

export function UploadFilesList() {
  const uploadsHandler = useContext(ContextForUploadsController);

  return (
    <GlassWindowFrame
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-col space-y-[1rem] p-[1rem]'>
        {uploadsHandler.files.map((file, i) => (
          <ContextForFileElem.Provider value={file} key={file.id}>
            <UploadedFileEntry key={file.id}>
              <UploadedFileEntryBody />
              <UploadedEntryRemove i={i} />
            </UploadedFileEntry>
          </ContextForFileElem.Provider>
        ))}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
