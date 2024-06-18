import { CollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { createContext } from 'react';
import { SpaceDraftResourcesBreadcrumbs } from './breadcrumbs/main';
import { SpaceDraftResourcesResults } from './results/main';
import { SpaceDraftResourcesSearch } from './search/main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpaceDraftCollectionResourcesMode() {
  return (
    <div className='flex h-full w-full flex-col'>
      <SpaceDraftResourcesSearch />
      <SpaceDraftResourcesBreadcrumbs />
      <SpaceDraftResourcesResults />
    </div>
  );
}
