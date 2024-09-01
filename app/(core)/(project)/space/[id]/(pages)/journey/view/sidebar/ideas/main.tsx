import { SpaceJourneySidebarIdeasList } from './list/main';
import { SpaceJourneySidebarIdeasSearch } from './search/main';

export function SpaceJourneySidebarIdeas() {
  return (
    <>
      <SpaceJourneySidebarIdeasSearch />
      <SpaceJourneySidebarIdeasList />
    </>
  );
}
