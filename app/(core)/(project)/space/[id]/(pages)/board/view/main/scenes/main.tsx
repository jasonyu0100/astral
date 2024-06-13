import { ScenesGoLeftAction } from './(common)/left/main';
import { ScenesGoRightAction } from './(common)/right/main';
import { ScenesContainer } from './container/main';
import { BoardScenesRow } from './row/main';

export function BoardScenes() {
  return (
    <ScenesContainer>
      <ScenesGoLeftAction />
      <BoardScenesRow />
      <ScenesGoRightAction />
    </ScenesContainer>
  );
}
