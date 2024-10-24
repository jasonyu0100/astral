import { NavigationTimelineContainer } from './container/main';
import { SpacesPostNavigationRow } from './row/main';

export function SpacesPostNavigation() {
  return (
    <NavigationTimelineContainer>
      {/* <NavigationTimelineGoLeftAction /> */}
      <SpacesPostNavigationRow />
      {/* <NavigationTimelineGoRightAction /> */}
    </NavigationTimelineContainer>
  );
}
