'use client';
import { StormSidebar } from './(storm-epic)/sidebar/main';
import { StormMain } from './(storm-epic)/main';
import { StormCore } from './(storm-epic)/core/main';

export function StormView() {
  return (
    <StormMain>
      <StormCore/>
      <StormSidebar />
    </StormMain>
  );
}
