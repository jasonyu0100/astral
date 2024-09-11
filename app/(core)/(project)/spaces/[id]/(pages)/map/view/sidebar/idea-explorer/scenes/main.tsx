import { SpacesMapSidebarScenesList } from './list/main';
import { SpacesMapSidebarScenesSearch } from './search/main';

export function SpacesMapSidebarScenes() {
  return (
    <>
      <SpacesMapSidebarScenesSearch />
      <SpacesMapSidebarScenesList />
    </>
  );
}
