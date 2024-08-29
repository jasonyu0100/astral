import { SpaceMapSidebarIdeasBreadcrumbs } from './breadcrumbs/main';
import { SpaceMapSidebarIdeasList } from './list/main';
import { SpaceMapSidebarIdeasSearch } from './search/main';

export function SpaceMapSidebarIdeas() {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-center p-[1rem] shadow-glow'>
        <SpaceMapSidebarIdeasBreadcrumbs />
        <SpaceMapSidebarIdeasSearch />
      </div>
      <div className='flex flex-col space-y-[1rem] p-[1rem]'>
        <SpaceMapSidebarIdeasList />
      </div>
    </>
  );
}
