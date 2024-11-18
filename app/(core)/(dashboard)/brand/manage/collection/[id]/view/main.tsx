import { BrandManageCollectionResourcesContainer } from './container/main';
import { BrandManageColllectionResourcesResults } from './results/main';
import { BrandManageCollectionResourcesSearch } from './search/main';

export function BrandManageCollectionResources() {
  return (
    <BrandManageCollectionResourcesContainer>
      <BrandManageCollectionResourcesSearch />
      <BrandManageColllectionResourcesResults />
    </BrandManageCollectionResourcesContainer>
  );
}
