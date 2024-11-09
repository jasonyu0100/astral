import { DriveFinderGalleryCollectionsContainer } from './container/main';
import { DriveFinderGalleryCollectionsResults } from './results/main';
import { DriveFinderGalleryCollectionsSearch } from './search/main';

export function DriveFinderGalleryCollections() {
  return (
    <DriveFinderGalleryCollectionsContainer>
      <DriveFinderGalleryCollectionsSearch />
      <DriveFinderGalleryCollectionsResults />
    </DriveFinderGalleryCollectionsContainer>
  );
}
