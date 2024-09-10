import { NavigationTimelineGoLeftAction } from './action/left/main';
import { NavigationTimelineGoRightAction } from './action/right/main';
import { NavigationTimelineContainer } from './container/main';
import { HorizonArcNavigationRow } from './row/main';

export function HorizonArcChapterNavigation() {
  return (
    <NavigationTimelineContainer>
      <NavigationTimelineGoLeftAction />
      <HorizonArcNavigationRow />
      <NavigationTimelineGoRightAction />
    </NavigationTimelineContainer>
  );
}
