import { ExplorerGalleryCollectionsContainer } from './container/main';
import { ExplorerGalleryCollectionsResults } from './results/main';
import { ExplorerGalleryCollectionsSearch } from './search/main';

export function ExplorerGalleryCollections() {
  return (
    <ExplorerGalleryCollectionsContainer>
      <ExplorerGalleryCollectionsSearch />
      <ExplorerGalleryCollectionsResults />
    </ExplorerGalleryCollectionsContainer>
  );
}
