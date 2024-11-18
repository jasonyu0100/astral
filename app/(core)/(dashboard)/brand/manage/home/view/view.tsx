'use client';
import { BrandManageHomeGallerysContainer } from './container/main';
import { BrandManageHomeGallerysResults } from './results/main';
import { BrandManageHomeGallerysSearch } from './search/main';

export function BrandManageHomeGallerysView() {
  return (
    <BrandManageHomeGallerysContainer>
      <BrandManageHomeGallerysSearch />
      <BrandManageHomeGallerysResults />
    </BrandManageHomeGallerysContainer>
  );
}
