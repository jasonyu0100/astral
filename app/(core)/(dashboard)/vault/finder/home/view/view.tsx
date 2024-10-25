'use client';
import { FinderHomeGallerysContainer } from './container/main';
import { FinderHomeGallerysResults } from './results/main';
import { FinderHomeGallerysSearch } from './search/main';

export function FinderHomeGallerysView() {
  return (
    <FinderHomeGallerysContainer>
      <FinderHomeGallerysSearch />
      <FinderHomeGallerysResults />
    </FinderHomeGallerysContainer>
  );
}
