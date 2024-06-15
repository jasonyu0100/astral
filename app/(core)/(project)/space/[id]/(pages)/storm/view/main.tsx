'use client';
import { SpaceStormContainer } from './container/main';
import { SpaceStormMain } from './main/main';
import { SpaceStormSidebar } from './sidebar/main';

export function SpaceStormView() {
  return (
    <SpaceStormContainer>
      <SpaceStormSidebar />
      <SpaceStormMain />
    </SpaceStormContainer>
  );
}
