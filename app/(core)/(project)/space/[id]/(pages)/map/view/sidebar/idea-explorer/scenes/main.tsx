import { SpaceMapSidebarScenesList } from './list/main';
import { SpaceMapSidebarScenesSearch } from './search/main';

export function SpaceMapSidebarScenes() {
  return (
    <>
      <div className='flex h-[4rem] w-full flex-col items-center justify-center px-[1rem] shadow-glow'>
        <SpaceMapSidebarScenesSearch />
      </div>
      <div className='flex flex-col space-y-[1rem] p-[1rem]'>
        <SpaceMapSidebarScenesList />
      </div>
    </>
  );
}
