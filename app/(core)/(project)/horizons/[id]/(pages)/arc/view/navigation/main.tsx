import { NavigationTimelineContainer } from './container/main';
import { HorizonsArcNavigationRow } from './row/main';

export function HorizonsArcNavigation() {
  return (
    <NavigationTimelineContainer>
      {/* <NavigationTimelineGoLeftAction /> */}
      <HorizonsArcNavigationRow />
      {/* <NavigationTimelineGoRightAction /> */}
    </NavigationTimelineContainer>
  );
}
