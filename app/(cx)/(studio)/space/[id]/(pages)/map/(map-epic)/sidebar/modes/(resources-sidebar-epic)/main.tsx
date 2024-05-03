import { createContext, useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../../../../../../(pkgs)/(explorer)/(resource-assets-epic)/sidebar/add/main';
import { CollectionHeader } from './header/main';
import { CollectionHeaderSearch } from './header/search/main';
import { SidebarCollectionResource } from '../../../../../../../../../../(pkgs)/(explorer)/(resource-assets-epic)/sidebar/main';
import { ResourceContext, ResourceObj } from '@/(lgx)/internal/model/resource/main';
import { ArchiveSidebarCreateModalContext } from '@/(cx)/(center)/(modals)/archive/sidebar/create/main';
import { ResourcesHandlerContext } from '@/(lgx)/internal/handler/explorer/resources/main';

export const SidebarResourceContext = createContext({} as ResourceObj);

export function ResourcesInterface() {
  const resourcesHandler = useContext(ResourcesHandlerContext)
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
