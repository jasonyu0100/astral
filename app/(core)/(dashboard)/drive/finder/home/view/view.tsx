'use client';
import { DriveFinderHomeGallerysContainer } from './container/main';
import { DriveFinderHomeGallerysResults } from './results/main';
import { DriveFinderHomeGallerysSearch } from './search/main';

export function DriveFinderHomeGallerysView() {
  return (
    <DriveFinderHomeGallerysContainer>
      <DriveFinderHomeGallerysSearch />
      <DriveFinderHomeGallerysResults />
    </DriveFinderHomeGallerysContainer>
  );
}
