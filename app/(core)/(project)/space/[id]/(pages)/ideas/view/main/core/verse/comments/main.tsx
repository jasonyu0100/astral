import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { roundedFx } from '@/(style)/data';
import { SpaceIdeasContentInput } from './input/main';
import { SpaceIdeasContentList } from './list/main';

export function SpaceIdeasContentComments() {
  return (
    <GlassWindowFrame
      className='flex h-full w-full border-slate-300 border-opacity-30'
      roundedFx={roundedFx['rounded-container']}
    >
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <SpaceIdeasContentInput />
        <SpaceIdeasContentList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
