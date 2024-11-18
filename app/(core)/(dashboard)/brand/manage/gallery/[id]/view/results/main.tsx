import { BrandManageGalleryCollectionsBreadcrumbs } from './breadcrumbs/main';
import { BrandManageGalleryCollectionsGrid } from './grid/main';

export function BrandManageGalleryCollectionsResults() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <BrandManageGalleryCollectionsBreadcrumbs />
      <BrandManageGalleryCollectionsGrid />
    </div>
  );
}
