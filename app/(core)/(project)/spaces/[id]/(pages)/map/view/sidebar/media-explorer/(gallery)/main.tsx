import { SpacesMapGalleryCollectionsResults } from './results/main';
import { SpacesMapGalleryCollectionsSearch } from './search/main';

export function SpacesMapGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesMapGalleryCollectionsSearch />
      <SpacesMapGalleryCollectionsResults />
    </div>
  );
}
