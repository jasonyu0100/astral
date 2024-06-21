'use client';
import { ExplorerHomeGallerysContainer } from './container/main';
import { ExplorerHomeGallerysResults } from './results/main';
import { ExplorerHomeGallerysSearch } from './search/main';

export function ExplorerHomeGallerysView() {
  return (
    <ExplorerHomeGallerysContainer>
      <ExplorerHomeGallerysSearch />
      <ExplorerHomeGallerysResults />
    </ExplorerHomeGallerysContainer>
  );
}
