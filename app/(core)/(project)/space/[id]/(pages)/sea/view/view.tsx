import { SpaceSeaContainer } from './container/main';
import { SpaceSeaMain } from './main/main';
import { SpaceSeaSidebar } from './sidebar/main';

export function SpaceSeaShareView() {
  return (
    <SpaceSeaContainer>
      <SpaceSeaSidebar />
      <SpaceSeaMain></SpaceSeaMain>
    </SpaceSeaContainer>
  );
}
