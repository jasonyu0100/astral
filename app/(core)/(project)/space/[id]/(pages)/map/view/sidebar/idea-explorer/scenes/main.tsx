import { SpaceMapSidebarScenesList } from './list/main';
import { SpaceMapSidebarScenesSearch } from './search/main';

export function SpaceMapSidebarScenes() {
  return (
    <>
      <SpaceMapSidebarScenesSearch />
      <SpaceMapSidebarScenesList />
    </>
  );
}
