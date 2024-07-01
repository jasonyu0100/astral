import { NavigationTimelineGoLeftAction } from './action/left/main';
import { NavigationTimelineGoRightAction } from './action/right/main';
import { NavigationTimelineContainer } from './container/main';
import { SpaceProgressNavigationRow } from './row/main';

export function SpaceProgressChapterNavigation() {
  return (
    <NavigationTimelineContainer>
      <NavigationTimelineGoLeftAction />
      <SpaceProgressNavigationRow />
      <NavigationTimelineGoRightAction />
    </NavigationTimelineContainer>
  );
}
