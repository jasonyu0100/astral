import { SpaceSpaceGalleryCollectionsResults } from './results/main';
import { SpaceSpaceGalleryCollectionsSearch } from './search/main';

export function SpaceSpaceGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceSpaceGalleryCollectionsResults />
      <SpaceSpaceGalleryCollectionsSearch />
    </div>
  );
}
