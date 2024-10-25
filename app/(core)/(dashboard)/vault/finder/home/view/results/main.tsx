import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { FinderHomeGallerysGrid } from './grid/main';

export function FinderHomeGallerysResults() {
  return (
    <div style={{ height: '100%', width: '100%' }} className='overflow-auto'>
      <GlassWindowFrame className='h-full w-full p-[2rem]'>
        <GlassWindowContents className='flex w-full flex-col'>
          <FinderHomeGallerysGrid />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
