'use client';
import { StormSidebar } from './(storm-epic)/sidebar/main';
import { StormContainer } from './(storm-epic)/main';
import { StormCore } from './(storm-epic)/core/main';

export function StormView() {
  return (
    <StormContainer>
      <StormCore/>
      <StormSidebar />
    </StormContainer>
  );
}
