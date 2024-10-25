'use client';
import { StudioSpacesContainer } from './container/main';
import { StudioSpacesHeader } from './header/main';
import { StudioSpacesTable } from './table/main';

export function StudioSpacesView() {
  return (
    <StudioSpacesContainer>
      <StudioSpacesHeader />
      <StudioSpacesTable />
    </StudioSpacesContainer>
  );
}
