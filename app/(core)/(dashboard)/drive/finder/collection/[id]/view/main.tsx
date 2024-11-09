import { DriveFinderCollectionResourcesContainer } from './container/main';
import { DriveFinderColllectionResourcesResults } from './results/main';
import { DriveFinderCollectionResourcesSearch } from './search/main';

export function DriveFinderCollectionResources() {
  return (
    <DriveFinderCollectionResourcesContainer>
      <DriveFinderCollectionResourcesSearch />
      <DriveFinderColllectionResourcesResults />
    </DriveFinderCollectionResourcesContainer>
  );
}
