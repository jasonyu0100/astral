'use client';
import { StormSidebar } from './(storm-epic)/sidebar/main';
import { StormWrapper } from './(storm-epic)/main';
import { StormBody } from './(storm-epic)/center/main';

export function StormView() {
  return (
    <StormWrapper>
      <StormBody/>
      <StormSidebar />
    </StormWrapper>
  );
}
