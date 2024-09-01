import { SpaceJourneySidebarScenesList } from './list/main';
import { SpaceJourneySidebarScenesSearch } from './search/main';

export function SpaceJourneySidebarScenes() {
  return (
    <>
      <SpaceJourneySidebarScenesSearch />
      <SpaceJourneySidebarScenesList />
    </>
  );
}
