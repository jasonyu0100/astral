import { SpaceProgressContainer } from './container/main';
import { SpaceProgressMain } from './main/main';
import { SpaceProgressSidebar } from './sidebar/main';

export function SpaceProgressShareView() {
  return (
    <SpaceProgressContainer>
      <SpaceProgressMain />
      <SpaceProgressSidebar />
    </SpaceProgressContainer>
  );
}
