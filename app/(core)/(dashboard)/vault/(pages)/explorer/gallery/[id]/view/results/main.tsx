import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ExplorerGalleryCollectionsBreadcrumbs } from './breadcrumbs/main';
import { ExplorerGalleryCollectionsGrid } from './grid/main';

export function ExplorerGalleryCollectionsResults() {
  return (
    <div style={{ height: '100%', width: '100%' }} className='overflow-auto'>
      <GlassWindowFrame className='h-full w-full p-[2rem]'>
        <GlassWindowContents className='flex w-full flex-col'>
          <ExplorerGalleryCollectionsBreadcrumbs />
          <ExplorerGalleryCollectionsGrid />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
