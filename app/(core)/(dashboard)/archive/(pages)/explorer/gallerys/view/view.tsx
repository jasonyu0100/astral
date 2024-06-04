'use client';
import { GallerysContainer } from './container/main';
import { GallerysSearch } from './search/main';
import { GallerysResults } from './results/main';

export function GallerysView() {
  return (
    <GallerysContainer>
      <GallerysSearch />
      <GallerysResults/>
    </GallerysContainer>
  );
}
