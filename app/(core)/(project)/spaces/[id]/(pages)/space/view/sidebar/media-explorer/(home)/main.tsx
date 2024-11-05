import { SpacesSpaceGallerysResults } from './results/main';
import { SpacesSpaceGallerysSearch } from './search/main';

export function SpacesSpaceSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesSpaceGallerysResults />
      <SpacesSpaceGallerysSearch />
    </div>
  );
}
