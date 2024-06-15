import { SpaceDraftSidebarContainer } from './container/main';
import { Footer } from './modes/(resources)/footer/main';
import { CollectionHeaderSearch } from './modes/(resources)/footer/search/view';
import { SpaceDraftSidebarBody } from './modes/main';

export function SpaceDraftSidebarView() {
  return (
    <SpaceDraftSidebarContainer>
      <SpaceDraftSidebarBody />
      <Footer>
        <CollectionHeaderSearch />
      </Footer>
    </SpaceDraftSidebarContainer>
  );
}
