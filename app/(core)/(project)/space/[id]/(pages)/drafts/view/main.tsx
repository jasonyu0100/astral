import { SpaceDraftsContainer } from './container/main';
import { SpaceDraftsMain } from './main/main';

export function SpaceDraftsView() {
  return (
    <SpaceDraftsContainer>
      <SpaceDraftsMain />
      {/* <SpaceDraftsSidebar /> */}
    </SpaceDraftsContainer>
  );
}
