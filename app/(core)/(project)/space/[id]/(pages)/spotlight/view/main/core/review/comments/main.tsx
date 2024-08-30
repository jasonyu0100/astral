import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { SpaceSpotlightInput } from './input/main';
import { SpaceSpotlightList } from './list/main';

export function SpaceSpotlightComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem] p-[4rem]'>
        <SpaceSpotlightInput />
        <SpaceSpotlightList />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
