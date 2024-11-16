import { CollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { createContext } from 'react';
import { SpacesIdeasResourcesResults } from './results/main';
import { SpacesIdeasResourcesSearch } from './search/main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpacesIdeasCollectionResourcesMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesIdeasResourcesResults />
      <SpacesIdeasResourcesSearch />
    </div>
  );
}
