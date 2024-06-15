import { SpaceFlowContainer } from './container/main';
import { SpaceFlowMain } from './main/main';
import { SpaceFlowSidebar } from './sidebar/main';

export function SpaceFlowView() {
  return (
    <SpaceFlowContainer>
      <SpaceFlowMain />
      <SpaceFlowSidebar />
    </SpaceFlowContainer>
  );
}
