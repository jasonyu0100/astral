'use client';
import { HorizonsContainer } from './container/main';
import { HorizonsMain } from './main/main';
import { ExplorerProjectsSidebar } from './sidebar/main';

export function HorizonsView() {
  return (
    <HorizonsContainer>
      <ExplorerProjectsSidebar />
      <HorizonsMain />
    </HorizonsContainer>
  );
}
