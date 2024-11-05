import { SpacesSpaceGalleryCollectionsResults } from './results/main';
import { SpacesSpaceGalleryCollectionsSearch } from './search/main';

export function SpacesSpaceGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesSpaceGalleryCollectionsResults />
      <SpacesSpaceGalleryCollectionsSearch />
    </div>
  );
}
