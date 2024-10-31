'use client';
import { StudioSharedContainer } from './container/main';
import { StudioSharedTable } from './table/main';

export function StudioSharedView() {
  return (
    <StudioSharedContainer>
      <StudioSharedTable />
    </StudioSharedContainer>
  );
}
