import { BoardMain } from './main/main';
import { BoardSidebar } from './sidebar/main';
import { BoardContainer } from './container/main';

export function BoardView() {
  return (
    <BoardContainer>
      <BoardMain/>
      <BoardSidebar />
    </BoardContainer>
  );
}
