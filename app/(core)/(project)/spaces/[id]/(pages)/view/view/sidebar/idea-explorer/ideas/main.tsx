import { SpacesViewSidebarIdeasList } from './list/main';
import { SpacesViewSidebarIdeasSearch } from './search/main';

export function SpacesViewSidebarIdeas() {
  return (
    <>
      <SpacesViewSidebarIdeasSearch />
      <SpacesViewSidebarIdeasList />
    </>
  );
}
