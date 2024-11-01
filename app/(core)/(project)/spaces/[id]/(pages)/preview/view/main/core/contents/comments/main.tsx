import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesPreviewInput } from './input/main';
import { SpacesPreviewList } from './list/main';

export function SpacesPreviewComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <SpacesPreviewInput />
        <SpacesPreviewList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
