import { DriveFinderGalleryCollectionsBreadcrumbs } from './breadcrumbs/main';
import { DriveFinderGalleryCollectionsGrid } from './grid/main';

export function DriveFinderGalleryCollectionsResults() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <DriveFinderGalleryCollectionsBreadcrumbs />
      <DriveFinderGalleryCollectionsGrid />
    </div>
  );
}
