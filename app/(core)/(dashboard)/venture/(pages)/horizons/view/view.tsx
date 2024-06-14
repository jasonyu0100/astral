'use client';
import { VentureHorizonsContainer } from './container/main';
import { VentureHorizonsMain } from './main/main';
import { VentureHorizonsSidebar } from './sidebar/main';

export function VentureHorizonsView() {
  return (
    <VentureHorizonsContainer>
      <VentureHorizonsSidebar />
      <VentureHorizonsMain />
    </VentureHorizonsContainer>
  );
}
