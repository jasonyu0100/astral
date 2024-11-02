import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpaceInboxPostCommentInput } from './input/main';
import { SpaceInboxPostCommentList } from './list/main';

export function SpaceInboxPostComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30 p-[2rem]'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <SpaceInboxPostCommentInput />
        <SpaceInboxPostCommentList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
