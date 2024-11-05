import { SpaceSpaceGallerysResults } from './results/main';
import { SpaceSpaceGallerysSearch } from './search/main';

export function SpaceSpaceSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceSpaceGallerysResults />
      <SpaceSpaceGallerysSearch />
    </div>
  );
}
