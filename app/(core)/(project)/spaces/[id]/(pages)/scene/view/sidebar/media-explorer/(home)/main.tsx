import { SpacesSceneGallerysResults } from './results/main';
import { SpacesSceneGallerysSearch } from './search/main';

export function SpacesSceneSidebarHomeGallerysMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesSceneGallerysResults />
      <SpacesSceneGallerysSearch />
    </div>
  );
}
