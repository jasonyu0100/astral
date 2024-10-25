import { CollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { createContext } from 'react';
import { SpacesViewResourcesResults } from './results/main';
import { SpacesViewResourcesSearch } from './search/main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpacesViewCollectionResourcesMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesViewResourcesResults />
      <SpacesViewResourcesSearch />
    </div>
  );
}
