import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceProgressUpdateFormContents } from './contents/main';
import { SpaceProgressUpdateFormHeader } from './header/main';

export function SpaceProgressCompleteUpdateForm() {
  return (
    <GlassWindowFrame
      className='h-full max-h-[600px] max-w-[800px] flex-grow'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col'>
        <SpaceProgressUpdateFormHeader />
        <SpaceProgressUpdateFormContents />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
