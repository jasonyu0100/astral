import { FinderCollectionResourcesContainer } from './container/main';
import { FinderColllectionResourcesResults } from './results/main';
import { FinderCollectionResourcesSearch } from './search/main';

export function FinderCollectionResources() {
  return (
    <FinderCollectionResourcesContainer>
      <FinderCollectionResourcesSearch />
      <FinderColllectionResourcesResults />
    </FinderCollectionResourcesContainer>
  );
}
