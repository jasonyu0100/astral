import { NavigationTimelineGoLeftAction } from './(common)/left/main';
import { NavigationTimelineGoRightAction } from './(common)/right/main';
import { NavigationTimelineContainer } from './container/main';
import { BoardScenesRow } from './row/main';

export function BoardBoardBodyScenes() {
  return (
    <NavigationTimelineContainer>
      <NavigationTimelineGoLeftAction />
      <BoardScenesRow />
      <NavigationTimelineGoRightAction />
    </NavigationTimelineContainer>
  );
}
