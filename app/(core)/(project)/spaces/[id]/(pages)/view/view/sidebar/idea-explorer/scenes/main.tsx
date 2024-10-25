import { SpacesViewSidebarScenesList } from './list/main';
import { SpacesViewSidebarScenesSearch } from './search/main';

export function SpacesViewSidebarScenes() {
  return (
    <>
      <SpacesViewSidebarScenesSearch />
      <SpacesViewSidebarScenesList />
    </>
  );
}
