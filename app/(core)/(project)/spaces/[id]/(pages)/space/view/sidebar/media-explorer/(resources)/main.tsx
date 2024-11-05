import { CollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { createContext } from 'react';
import { SpacesSpaceResourcesResults } from './results/main';
import { SpacesSpaceResourcesSearch } from './search/main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpacesSpaceCollectionResourcesMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesSpaceResourcesResults />
      <SpacesSpaceResourcesSearch />
    </div>
  );
}
