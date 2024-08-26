import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { SpaceReviewContentInput } from './input/main';
import { SpaceReviewContentList } from './list/main';

export function SpaceReviewContentComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem] px-[2rem] py-[2rem]'>
        <SpaceReviewContentInput />
        <SpaceReviewContentList />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
