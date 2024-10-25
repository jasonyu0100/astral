import { SpacesViewGallerysResults } from './results/main';
import { SpacesViewGallerysSearch } from './search/main';

export function SpacesViewSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesViewGallerysResults />
      <SpacesViewGallerysSearch />
    </div>
  );
}
