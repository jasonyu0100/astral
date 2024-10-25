import { SpacesViewGalleryCollectionsResults } from './results/main';
import { SpacesViewGalleryCollectionsSearch } from './search/main';

export function SpacesViewGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesViewGalleryCollectionsResults />
      <SpacesViewGalleryCollectionsSearch />
    </div>
  );
}
