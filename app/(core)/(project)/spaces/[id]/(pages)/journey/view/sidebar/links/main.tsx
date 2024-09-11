import { SpacesJourneySidebarLinksList } from './list/main';
import { SpacesJourneySidebarIdeasSelect } from './select/main';

export function SpacesJourneySidebarIdeas() {
  return (
    <>
      <SpacesJourneySidebarIdeasSelect />
      <SpacesJourneySidebarLinksList />
    </>
  );
}
