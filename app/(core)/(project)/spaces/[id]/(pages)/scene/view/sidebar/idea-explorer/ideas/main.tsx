import { SpacesSceneSidebarIdeasList } from './list/main';
import { SpacesSceneSidebarIdeasSearch } from './search/main';

export function SpacesSceneSidebarIdeas() {
  return (
    <>
      <SpacesSceneSidebarIdeasSearch />
      <SpacesSceneSidebarIdeasList />
    </>
  );
}
