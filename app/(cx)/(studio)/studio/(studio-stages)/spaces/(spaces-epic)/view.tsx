'use client';
import { SpacesHeader } from './header/main';
import { SpacesMain } from './main/main';
import { StudioSpacesContainer } from './container/main';

export function StudioSpacesView() {
  return (
    <StudioSpacesContainer>
      <SpacesHeader />
      <SpacesMain />
    </StudioSpacesContainer>
  );
}
