import { SpacesIdeasGallerysResults } from './results/main';
import { SpacesIdeasGallerysSearch } from './search/main';

export function SpacesIdeasSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesIdeasGallerysResults />
      <SpacesIdeasGallerysSearch />
    </div>
  );
}
