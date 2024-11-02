import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesUpdatesPostCommentInput } from './input/main';
import { SpacesUpdatesPostCommentList } from './list/main';

export function SpacesUpdatesPostComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30 p-[2rem]'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <SpacesUpdatesPostCommentInput />
        <SpacesUpdatesPostCommentList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
