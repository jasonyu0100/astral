import { NavigationTimelineGoLeftAction } from './action/left/main';
import { NavigationTimelineGoRightAction } from './action/right/main';
import { NavigationTimelineContainer } from './container/main';
import { SpaceDraftNavigationRow } from './row/main';

export function SpaceDraftChapterNavigation() {
  return (
    <NavigationTimelineContainer>
      <NavigationTimelineGoLeftAction />
      <SpaceDraftNavigationRow />
      <NavigationTimelineGoRightAction />
    </NavigationTimelineContainer>
  );
}
