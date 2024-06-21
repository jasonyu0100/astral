import { SpaceSessionContainer } from './container/main';
import { SpaceSessionMain } from './main/main';
import { SpaceSessionSidebar } from './sidebar/main';

export function SpaceSessionShareView() {
  return (
    <SpaceSessionContainer>
      <SpaceSessionMain />
      <SpaceSessionSidebar />
    </SpaceSessionContainer>
  );
}
