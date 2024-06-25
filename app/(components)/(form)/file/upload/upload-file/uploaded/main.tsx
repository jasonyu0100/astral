import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { UploadedFileEntryBody } from '../../common/entry/body/main';
import { UploadedEntryRemove } from './remove/main';

export function UploadedFile() {
  return (
    <GlassWindowFrame
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-row p-[1rem]'>
        <UploadedFileEntryBody />
        <UploadedEntryRemove />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
