import { NavigationTimelineGoLeftAction } from './action/left/main';
import { NavigationTimelineGoRightAction } from './action/right/main';
import { NavigationTimelineContainer } from './container/main';
import { SpaceSeaNavigationRow } from './row/main';

export function SpaceSeaChapterNavigation() {
  return (
    <NavigationTimelineContainer>
      <NavigationTimelineGoLeftAction />
      <SpaceSeaNavigationRow />
      <NavigationTimelineGoRightAction />
    </NavigationTimelineContainer>
  );
}
