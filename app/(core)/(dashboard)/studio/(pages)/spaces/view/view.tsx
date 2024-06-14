'use client';
import { StudioSpacesContainer } from './container/main';
import { SpacesHeader } from './header/main';
import { StudioSpacesTable } from './table/main';

export function StudioSpacesView() {
  return (
    <StudioSpacesContainer>
      <SpacesHeader />
      <StudioSpacesTable />
    </StudioSpacesContainer>
  );
}
