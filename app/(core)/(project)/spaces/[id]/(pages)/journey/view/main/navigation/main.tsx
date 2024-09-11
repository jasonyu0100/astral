import { NavigationTimelineContainer } from './container/main';
import { SpacesJourneyNavigationRow } from './row/main';

export function SpacesJourneyChapterNavigation() {
  return (
    <NavigationTimelineContainer>
      {/* <NavigationTimelineGoLeftAction /> */}
      <SpacesJourneyNavigationRow />
      {/* <NavigationTimelineGoRightAction /> */}
    </NavigationTimelineContainer>
  );
}
