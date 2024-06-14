import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { ExplorerGalleryCollectionsBreadcrumbs } from './breadcrumbs/main';
import { ExplorerGalleryCollectionsGrid } from './grid/main';

export function ExplorerGalleryCollectionsResults() {
  return (
    <GlassWindowFrame className='h-full flex-grow px-[2rem] pt-[1rem]'>
      <GlassWindowContents className='flex w-full flex-col overflow-auto'>
        <ExplorerGalleryCollectionsBreadcrumbs />
        <ExplorerGalleryCollectionsGrid />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
