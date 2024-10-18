import { CollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { createContext } from 'react';
import { SpacesMapResourcesResults } from './results/main';
import { SpacesMapResourcesSearch } from './search/main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpacesMapCollectionResourcesMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesMapResourcesResults />
      <SpacesMapResourcesSearch />
    </div>
  );
}
