import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { PublicSpacesPageInput } from './input/main';
import { PublicSpacesPageList } from './list/main';

export function PublicSpacesPageComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30 pb-[2rem]'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <PublicSpacesPageInput />
        <PublicSpacesPageList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
