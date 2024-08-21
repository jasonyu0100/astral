import { SpaceMapGalleryCollectionsResults } from './results/main';
import { SpaceMapGalleryCollectionsSearch } from './search/main';

export function SpaceMapGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceMapGalleryCollectionsSearch />
      <SpaceMapGalleryCollectionsResults />
    </div>
  );
}
