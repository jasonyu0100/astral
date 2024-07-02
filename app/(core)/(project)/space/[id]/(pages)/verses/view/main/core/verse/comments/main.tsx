import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceVersesContentInput } from './input/main';
import { SpaceVersesContentList } from './list/main';

export function SpaceVersesContentComments() {
  return (
    <GlassWindowFrame
      className='flex h-full w-full border-slate-300 border-opacity-30'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem] px-[3rem] py-[2rem]'>
        <SpaceVersesContentInput />
        <SpaceVersesContentList />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
