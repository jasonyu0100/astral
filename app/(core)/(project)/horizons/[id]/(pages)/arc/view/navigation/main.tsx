import { NavigationTimelineContainer } from './container/main';
import { SpaceFlightNavigationRow } from './row/main';

export function HorizonsArcNavigation() {
  return (
    <NavigationTimelineContainer>
      {/* <NavigationTimelineGoLeftAction /> */}
      <SpaceFlightNavigationRow />
      {/* <NavigationTimelineGoRightAction /> */}
    </NavigationTimelineContainer>
  );
}
