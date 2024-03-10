import { createContext, useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../../../../../(studio)/archive/(resources-epic)/resource/sidebar/add/main';
import { CollectionHeader } from './header/main';
import { CollectionHeaderSearch } from './header/search/main';
import { SidebarCollectionResource } from '../../../../../../../../../(studio)/archive/(resources-epic)/resource/sidebar/main';
import { ResourceContext, ResourceObj } from '@/(logic)/internal/data/infra/model/resource/main';
import { ArchiveSidebarCreateModalContext } from '@/(modals)/(studio)/archive/sidebar/create/main';
import { CollectionResourcesHandlerContext } from '@/(logic)/internal/handler/explorer/resources/main';

export const SidebarResourceContext = createContext({} as ResourceObj);

export function ResourcesInterface() {
  const resourcesHandler = useContext(CollectionResourcesHandlerContext)
  const searchResults = resourcesHandler.searchResults
  const modalContext = useContext(ArchiveSidebarCreateModalContext)

  return (
      <div className='flex h-full flex-col w-full'>
        <div className='w-full flex flex-row flex-wrap gap-[2rem]'>
          <CollectionResourceAdd
            onClick={() => {
              modalContext.createResource.open();
            }}
          />
          {searchResults.map((resource) => (
            <ResourceContext.Provider value={resource} key={resource.id}>
              <SidebarCollectionResource key={resource.id}/>
            </ResourceContext.Provider>
          ))}
        </div>
        <CollectionHeader>
          <CollectionHeaderSearch />
        </CollectionHeader>
      </div>
  );
}
