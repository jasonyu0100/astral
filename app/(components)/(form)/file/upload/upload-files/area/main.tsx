import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { UploadFilesAreaPlaceholder } from './placeholder/main';
import { UploadFilesAreaInterface } from './upload/main';

export function UploadFilesArea() {
  return (
    <GlassWindowFrame
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-row p-[1rem]'>
        <UploadFilesAreaInterface />
        <UploadFilesAreaPlaceholder />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
