import { SpaceIdeasContainer } from './container/main';
import { SpaceIdeasMain } from './main/main';
import { SpaceIdeasSidebar } from './sidebar/main';

export function SpaceIdeasView() {
  return (
    <SpaceIdeasContainer>
      <SpaceIdeasSidebar />
      <SpaceIdeasMain />
    </SpaceIdeasContainer>
  );
}
