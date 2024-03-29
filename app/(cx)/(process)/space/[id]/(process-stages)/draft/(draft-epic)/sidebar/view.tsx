import { DraftSidebarBody } from './modes/main';
import { DraftSidebarHeader } from './header/main';
import { DraftSidebarContainer } from './container/main';

export function DraftSidebarView() {
  return (
    <DraftSidebarContainer>
      <DraftSidebarHeader />
      <DraftSidebarBody />
    </DraftSidebarContainer>
  );
}
