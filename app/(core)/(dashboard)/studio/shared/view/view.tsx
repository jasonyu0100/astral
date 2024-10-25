'use client';
import { StudioSpacesContainer } from './container/main';
import { StudioSpacesTable } from './table/main';

export function StudioSpacesView() {
  return (
    <StudioSpacesContainer>
      <StudioSpacesTable />
    </StudioSpacesContainer>
  );
}
