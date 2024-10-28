import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { SpacesPostInput } from './input/main';
import { SpacesPostList } from './list/main';

export function SpacesPostComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem] bg-slate-950 bg-opacity-50 px-[4rem] py-[2rem]'>
        <SpacesPostInput />
        <SpacesPostList />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-20']} />
    </GlassWindowFrame>
  );
}
