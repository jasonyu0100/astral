import { SpaceSessionsContainer } from './container/main';
import { SpaceSessionsMain } from './main/main';
import { SpaceSessionsSidebar } from './sidebar/main';

export function SpaceSessionsShareView() {
  return (
    <SpaceSessionsContainer>
      <SpaceSessionsMain />
      <SpaceSessionsSidebar />
    </SpaceSessionsContainer>
  );
}
