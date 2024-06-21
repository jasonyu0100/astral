import { SpaceMapGalleryCollectionsBreadcrumbs } from './breadcrumbs/main';
import { SpaceMapGalleryCollectionsResults } from './results/main';
import { SpaceMapGalleryCollectionsSearch } from './search/main';

export function SpaceMapGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceMapGalleryCollectionsSearch />
      <SpaceMapGalleryCollectionsBreadcrumbs />
      <SpaceMapGalleryCollectionsResults />
    </div>
  );
}
