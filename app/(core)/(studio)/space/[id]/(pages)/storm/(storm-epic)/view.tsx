'use client';
import { StormSidebar } from './sidebar/main';
import { StormContainer } from './container/main';
import { StormMain } from './main/main';

export function StormView() {
  return (
    <StormContainer>
      <StormSidebar />
      <StormMain/>
    </StormContainer>
  );
}
