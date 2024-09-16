import { FinderGalleryCollectionsContainer } from './container/main';
import { FinderGalleryCollectionsResults } from './results/main';
import { FinderGalleryCollectionsSearch } from './search/main';

export function FinderGalleryCollections() {
  return (
    <FinderGalleryCollectionsContainer>
      <FinderGalleryCollectionsSearch />
      <FinderGalleryCollectionsResults />
    </FinderGalleryCollectionsContainer>
  );
}
