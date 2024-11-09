import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { DriveFinderCollectionResourcesBreadcrumbs } from './breadcrumbs/main';
import { DriveFinderCollectionResourcesGrid } from './grid/main';

export function DriveFinderColllectionResourcesResults() {
  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <GlassWindowFrame className='h-full w-full p-[2rem]'>
        <GlassWindowContents className='flex w-full flex-col'>
          <DriveFinderCollectionResourcesBreadcrumbs />
          <DriveFinderCollectionResourcesGrid />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
