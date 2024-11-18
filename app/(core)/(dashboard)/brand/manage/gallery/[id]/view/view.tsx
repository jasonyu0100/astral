import { BrandManageGalleryCollectionsContainer } from './container/main';
import { BrandManageGalleryCollectionsResults } from './results/main';
import { BrandManageGalleryCollectionsSearch } from './search/main';

export function BrandManageGalleryCollections() {
  return (
    <BrandManageGalleryCollectionsContainer>
      <BrandManageGalleryCollectionsSearch />
      <BrandManageGalleryCollectionsResults />
    </BrandManageGalleryCollectionsContainer>
  );
}
