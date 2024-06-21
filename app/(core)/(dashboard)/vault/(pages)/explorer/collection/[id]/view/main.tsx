import { ExplorerCollectionResourcesContainer } from './container/main';
import { ExplorerColllectionResourcesResults } from './results/main';
import { ExplorerCollectionResourcesSearch } from './search/main';

export function ExplorerCollectionResources() {
  return (
    <ExplorerCollectionResourcesContainer>
      <ExplorerCollectionResourcesSearch />
      <ExplorerColllectionResourcesResults />
    </ExplorerCollectionResourcesContainer>
  );
}
