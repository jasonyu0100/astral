import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { PublicSpacesPagesInput } from './input/main';
import { PublicSpacesPagesList } from './list/main';

export function PublicSpacesPagesComments() {
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30'>
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <PublicSpacesPagesInput />
        <PublicSpacesPagesList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
