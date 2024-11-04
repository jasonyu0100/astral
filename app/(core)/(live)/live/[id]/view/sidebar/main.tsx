import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { PublicSpaceSidebarChapters } from './chapters/main';
import { PublicSpaceSidebarSpace } from './space/main';

export function PublicSpaceSidebar() {
  return (
    <div className='flex h-full w-[400px] flex-shrink-0 flex-col overflow-auto'>
      <GlassWindowFrame className='h-full w-full'>
        <GlassWindowContents className='flex w-full flex-col space-y-[2rem] px-[1rem] py-[2rem]'>
          <PublicSpaceSidebarSpace />
          <PublicSpaceSidebarChapters />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
