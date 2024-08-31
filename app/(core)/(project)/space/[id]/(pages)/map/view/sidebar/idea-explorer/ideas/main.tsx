import { SpaceMapSidebarIdeasBreadcrumbs } from './breadcrumbs/main';
import { SpaceMapSidebarIdeasList } from './list/main';
import { SpaceMapSidebarIdeasSearch } from './search/main';

export function SpaceMapSidebarIdeas() {
  return (
    <>
      <div className='flex h-[4rem] w-full flex-col items-center justify-center px-[1rem] shadow-glow'>
        <SpaceMapSidebarIdeasSearch />
      </div>
      <div className='flex flex-col space-y-[1rem] p-[1rem]'>
        <SpaceMapSidebarIdeasBreadcrumbs />
        <SpaceMapSidebarIdeasList />
      </div>
    </>
  );
}
