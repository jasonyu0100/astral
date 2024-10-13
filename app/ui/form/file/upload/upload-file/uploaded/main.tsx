import { UploadHandlerContext } from '@/api/controller/s3/single/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { UploadedFileEntryBody } from '../../common/entry/body/main';

export function UploadedFile() {
  const uploadHandler = useContext(UploadHandlerContext);

  return (
    <GlassWindowFrame
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-row items-center space-x-[1rem] pr-[2rem]'>
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
