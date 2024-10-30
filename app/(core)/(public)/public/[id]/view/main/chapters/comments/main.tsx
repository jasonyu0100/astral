import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { PublicSpacePageInput } from './input/main';
import { PublicSpacePageList } from './list/main';

export function PublicSpacePageComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30 pb-[2rem]'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <PublicSpacePageInput />
        <PublicSpacePageList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
