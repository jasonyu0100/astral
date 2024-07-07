import { SpaceMapGallerysResults } from './results/main';
import { SpaceMapGallerysSearch } from './search/main';

export function SpaceMapSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col space-y-[1rem]'>
      <SpaceMapGallerysSearch />
      {/* <SpaceMapGallerysBreadcrumbs /> */}
      <SpaceMapGallerysResults />
    </div>
  );
}
