import { SpaceJourneySidebarLinksList } from './list/main';
import { SpaceJourneySidebarIdeasSelect } from './select/main';

export function SpaceJourneySidebarIdeas() {
  return (
    <>
      <SpaceJourneySidebarIdeasSelect />
      <SpaceJourneySidebarLinksList />
    </>
  );
}
