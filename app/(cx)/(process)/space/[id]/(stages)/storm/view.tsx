'use client';
import { StormSidebar } from './(storm-epic)/sidebar/main';
import { StormWrapper } from './(storm-epic)/main';
import { StormCore } from './(storm-epic)/core/main';

export function StormView() {
  return (
    <StormWrapper>
      <StormCore/>
      <StormSidebar />
    </StormWrapper>
  );
}
