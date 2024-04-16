'use client';
import { VentureHorizonsContainer } from './container/main';
import { HorizonsMain } from './main/main';
import { HorizonsSidebar } from './sidebar/main';

export function VentureHorizonsView() {
  return (
    <VentureHorizonsContainer>
      <HorizonsMain />
      <HorizonsSidebar />
    </VentureHorizonsContainer>
  );
}
