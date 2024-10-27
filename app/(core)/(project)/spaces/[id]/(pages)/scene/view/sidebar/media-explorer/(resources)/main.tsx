import { CollectionResourceObj } from '@/server/model/gallery/collection/resource/main';
import { createContext } from 'react';
import { SpacesSceneResourcesResults } from './results/main';
import { SpacesSceneResourcesSearch } from './search/main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpacesSceneCollectionResourcesMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpacesSceneResourcesResults />
      <SpacesSceneResourcesSearch />
    </div>
  );
}
