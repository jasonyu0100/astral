import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpaceMapChatExplorerInput() {
  return (
    <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0'>
      <GlassWindowContents className='p-[1rem]'>
        <GlassWindowFrame
          className='h-full w-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents className='flex h-full w-full flex-row items-center'>
            <input className='h-full w-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none' />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
