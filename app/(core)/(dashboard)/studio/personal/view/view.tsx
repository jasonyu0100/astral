'use client';
import { StudioPersonalContainer } from './container/main';
import { StudioPersonalHeader } from './header/main';
import { StudioPersonalTable } from './table/main';

export function StudioPersonalView() {
  return (
    <StudioPersonalContainer>
      <StudioPersonalHeader />
      <StudioPersonalTable />
    </StudioPersonalContainer>
  );
}
