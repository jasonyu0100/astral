'use client';
import { HorizonsContainer } from './container/main';
import { HorizonsMain } from './main/main';
import { HorizonsSidebar } from './sidebar/main';

export function HorizonsView() {
  return (
    <HorizonsContainer>
      <HorizonsSidebar />
      <HorizonsMain />
    </HorizonsContainer>
  );
}
