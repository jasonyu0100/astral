import { SpaceMapGallerysBreadcrumbs } from './breadcrumbs/main';
import { SpaceMapGallerysResults } from './results/main';
import { SpaceMapGallerysSearch } from './search/main';

export function SpaceMapSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceMapGallerysSearch />
      <SpaceMapGallerysBreadcrumbs />
      <SpaceMapGallerysResults />
    </div>
  );
}
