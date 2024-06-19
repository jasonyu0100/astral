import { SpaceDraftGalleryCollectionsBreadcrumbs } from './breadcrumbs/main';
import { SpaceDraftGalleryCollectionsResults } from './results/main';
import { SpaceDraftGalleryCollectionsSearch } from './search/main';

export function SpaceDraftGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceDraftGalleryCollectionsSearch />
      <SpaceDraftGalleryCollectionsBreadcrumbs />
      <SpaceDraftGalleryCollectionsResults />
    </div>
  );
}
