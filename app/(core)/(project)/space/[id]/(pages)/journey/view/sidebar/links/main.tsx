import { SpaceJourneySidebarLinksList } from './list/main';
import { SpaceJourneySidebarIdeasSearch } from './search/main';

export function SpaceJourneySidebarIdeas() {
  return (
    <>
      <SpaceJourneySidebarIdeasSearch />
      <SpaceJourneySidebarLinksList />
    </>
  );
}
