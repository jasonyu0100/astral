import { NavigationTimelineGoLeftAction } from './action/left/main';
import { NavigationTimelineGoRightAction } from './action/right/main';
import { NavigationTimelineContainer } from './container/main';
import { SpaceFlowNavigationRow } from './row/main';

export function SpaceFlowChapterNavigation() {
  return (
    <NavigationTimelineContainer>
      <NavigationTimelineGoLeftAction />
      <SpaceFlowNavigationRow />
      <NavigationTimelineGoRightAction />
    </NavigationTimelineContainer>
  );
}
