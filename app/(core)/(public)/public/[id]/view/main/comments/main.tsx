import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { PublicSpacesPostInput } from './input/main';
import { PublicSpacesPostList } from './list/main';

export function PublicSpacesPostComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <PublicSpacesPostInput />
        <PublicSpacesPostList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
