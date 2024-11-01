import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { PublicSpaceMain } from './main/main';
import { PublicSpaceSidebar } from './sidebar/main';

export function PublicSpaceView() {
  return (
    <div
      className='relative flex h-full w-full flex-col'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <GlassWindowFrame className='h-full w-full'>
        <GlassWindowContents className='flex h-full w-full flex-row space-x-[4rem] overflow-auto px-[4rem]'>
          <PublicSpaceMain />
          <PublicSpaceSidebar />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
