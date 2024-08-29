import { SpaceMapSidebarScenesBreadcrumbs } from './breadcrumbs/main';
import { SpaceMapSidebarScenesList } from './list/main';
import { SpaceMapSidebarScenesSearch } from './search/main';

export function SpaceMapSidebarScenes() {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-center p-[1rem] shadow-glow'>
        <SpaceMapSidebarScenesBreadcrumbs />
        <SpaceMapSidebarScenesSearch />
      </div>
      <div className='flex flex-col space-y-[1rem] p-[1rem]'>
        <SpaceMapSidebarScenesList />
      </div>
    </>
  );
}
