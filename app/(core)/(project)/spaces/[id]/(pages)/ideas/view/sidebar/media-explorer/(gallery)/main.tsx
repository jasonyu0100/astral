import { SpacesIdeasGalleryCollectionsResults } from './results/main';
import { SpacesIdeasGalleryCollectionsSearch } from './search/main';

export function SpacesIdeasGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesIdeasGalleryCollectionsResults />
      <SpacesIdeasGalleryCollectionsSearch />
    </div>
  );
}
