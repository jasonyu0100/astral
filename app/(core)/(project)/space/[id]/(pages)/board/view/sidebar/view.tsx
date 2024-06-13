import { BoardSidebarBody } from './modes/main';
import { BoardSidebarContainer } from './container/main';

export function BoardSidebarView() {
  return (
    <BoardSidebarContainer>
      <BoardSidebarBody />
    </BoardSidebarContainer>
  );
}
