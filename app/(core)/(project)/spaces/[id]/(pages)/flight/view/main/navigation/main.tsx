import { NavigationTimelineContainer } from './container/main';
import { SpacesFlightNavigationRow } from './row/main';

export function SpacesFlightNavigation() {
  return (
    <NavigationTimelineContainer>
      {/* <NavigationTimelineGoLeftAction /> */}
      <SpacesFlightNavigationRow />
      {/* <NavigationTimelineGoRightAction /> */}
    </NavigationTimelineContainer>
  );
}
