import { SpacesMapGallerysResults } from './results/main';
import { SpacesMapGallerysSearch } from './search/main';

export function SpacesMapSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesMapGallerysSearch />
      <SpacesMapGallerysResults />
    </div>
  );
}
