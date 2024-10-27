import { SpacesSceneSidebarScenesList } from './list/main';
import { SpacesSceneSidebarScenesSearch } from './search/main';

export function SpacesSceneSidebarScenes() {
  return (
    <>
      <SpacesSceneSidebarScenesSearch />
      <SpacesSceneSidebarScenesList />
    </>
  );
}
