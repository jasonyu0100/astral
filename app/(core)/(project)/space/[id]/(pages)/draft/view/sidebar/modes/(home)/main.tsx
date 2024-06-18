import { SpaceDraftGallerysBreadcrumbs } from './breadcrumbs/main';
import { SpaceDraftGallerysResults } from './results/main';
import { SpaceDraftGallerysSearch } from './search/main';

export function SpaceDraftSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceDraftGallerysSearch />
      <SpaceDraftGallerysBreadcrumbs />
      <SpaceDraftGallerysResults />
    </div>
  );
}
