import { UploadHandlerContext } from '@/api/controller/s3/single/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { borderFx, glassFx } from '@/style/data';
import { useContext } from 'react';
import { UploadedFileEntryBody } from '../../common/entry/body/main';

export function UploadedFile() {
  const uploadHandler = useContext(UploadHandlerContext);

  return (
    <GlassWindowFrame borderFx={borderFx['border-around']}>
      <GlassWindowContents className='flex flex-row items-center justify-between space-x-[1rem] pr-[2rem]'>
        <UploadedFileEntryBody />
        <AstralCloseIcon
          onClick={() => {
            uploadHandler.uploadActions.clearFile();
          }}
        />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
