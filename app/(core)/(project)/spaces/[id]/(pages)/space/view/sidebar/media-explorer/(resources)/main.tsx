import { CollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { createContext } from 'react';
import { SpaceSpaceResourcesResults } from './results/main';
import { SpaceSpaceResourcesSearch } from './search/main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpaceSpaceCollectionResourcesMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceSpaceResourcesResults />
      <SpaceSpaceResourcesSearch />
    </div>
  );
}
