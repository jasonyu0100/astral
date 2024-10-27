import { SpacesSceneGalleryCollectionsResults } from './results/main';
import { SpacesSceneGalleryCollectionsSearch } from './search/main';

export function SpacesSceneGalleryCollectionsMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesSceneGalleryCollectionsResults />
      <SpacesSceneGalleryCollectionsSearch />
    </div>
  );
}
