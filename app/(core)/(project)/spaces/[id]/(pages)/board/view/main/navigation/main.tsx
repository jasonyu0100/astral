import { NavigationTimelineContainer } from './container/main';
import { SpacesBoardNavigationRow } from './row/main';

export function SpacesBoardNavigation() {
  return (
    <NavigationTimelineContainer>
      {/* <NavigationTimelineGoLeftAction /> */}
      <SpacesBoardNavigationRow />
      {/* <NavigationTimelineGoRightAction /> */}
    </NavigationTimelineContainer>
  );
}
