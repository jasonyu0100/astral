'use client';
import { StormSidebar } from './(storm-epic)/sidebar/main';
import { StormContainer } from './(storm-epic)/container/main';
import { StormMain } from './(storm-epic)/main/main';

export function StormView() {
  return (
    <StormContainer>
      <StormMain/>
      <StormSidebar />
    </StormContainer>
  );
}
