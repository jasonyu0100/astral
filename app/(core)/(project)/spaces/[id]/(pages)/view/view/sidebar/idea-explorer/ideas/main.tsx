import { SpacesMapSidebarIdeasList } from './list/main';
import { SpacesMapSidebarIdeasSearch } from './search/main';

export function SpacesMapSidebarIdeas() {
  return (
    <>
      <SpacesMapSidebarIdeasSearch />
      <SpacesMapSidebarIdeasList />
    </>
  );
}
