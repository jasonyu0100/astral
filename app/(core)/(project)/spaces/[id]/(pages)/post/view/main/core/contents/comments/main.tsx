import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesPostInput } from './input/main';
import { SpacesPostList } from './list/main';

export function SpacesPostComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <SpacesPostInput />
        <SpacesPostList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
