import { NavigationTimelineContainer } from './container/main';
import { SpacesJourneyNavigationRow } from './row/main';

export function SpacesJourneyNavigation() {
  return (
    <NavigationTimelineContainer>
      {/* <NavigationTimelineGoLeftAction /> */}
      <SpacesJourneyNavigationRow />
      {/* <NavigationTimelineGoRightAction /> */}
    </NavigationTimelineContainer>
  );
}
