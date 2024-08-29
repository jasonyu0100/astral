import { CollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { createContext } from 'react';
import { SpaceMapResourcesResults } from './results/main';
import { SpaceMapResourcesSearch } from './search/main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpaceMapCollectionResourcesMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceMapResourcesSearch />
      <SpaceMapResourcesResults />
    </div>
  );
}
