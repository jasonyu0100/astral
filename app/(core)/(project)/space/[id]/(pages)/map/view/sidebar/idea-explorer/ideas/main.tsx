import { SpaceMapSidebarIdeasList } from './list/main';
import { SpaceMapSidebarIdeasSearch } from './search/main';

export function SpaceMapSidebarIdeas() {
  return (
    <>
      <SpaceMapSidebarIdeasSearch />
      <SpaceMapSidebarIdeasList />
    </>
  );
}
