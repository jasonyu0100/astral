import { NavigationTimelineContainer } from './container/main';
import { SpacesFlightNavigationRow } from './row/main';

export function SpacesFlightChapterNavigation() {
  return (
    <NavigationTimelineContainer>
      {/* <NavigationTimelineGoLeftAction /> */}
      <SpacesFlightNavigationRow />
      {/* <NavigationTimelineGoRightAction /> */}
    </NavigationTimelineContainer>
  );
}
