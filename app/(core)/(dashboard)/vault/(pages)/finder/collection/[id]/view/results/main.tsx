import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { FinderCollectionResourcesBreadcrumbs } from './breadcrumbs/main';
import { FinderCollectionResourcesGrid } from './grid/main';

export function FinderColllectionResourcesResults() {
  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <GlassWindowFrame className='h-full w-full p-[2rem]'>
        <GlassWindowContents className='flex w-full flex-col'>
          <FinderCollectionResourcesBreadcrumbs />
          <FinderCollectionResourcesGrid />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
