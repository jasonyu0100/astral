import { createContext, useContext } from 'react';
import { ResourcesFooter } from './footer/main';
import { CollectionHeaderSearch } from './footer/search/main';
import { CollectionResourceContext, CollectionResourceObj } from '@/(model)/gallery/collection/resource/main';
import { ArchiveSidebarCreateModalContext } from '@/(core)/(dashboard)/(modals)/archive/sidebar/create/main';
import { ResourcesHandlerContext } from '@/(controller)/explorer/resources/main';
import { CollectionResourceAdd } from '@/(components)/(media)/(resource-file)/sidebar/add/main';
import { SidebarCollectionResource } from '@/(components)/(media)/(resource-file)/sidebar/main';

export const SidebarResourceContext = createContext({} as CollectionResourceObj);


// TODO ADD SEARCH AND BREADCRUMB TO SIDEBAR RESOURCES

export function ResourcesInterface() {
  const resourcesHandler = useContext(ResourcesHandlerContext);
  const searchResults = resourcesHandler.searchResults;
  const modalContext = useContext(ArchiveSidebarCreateModalContext);

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex w-full flex-row flex-wrap gap-[2rem] overflow-auto'>
        <CollectionResourceAdd
          onClick={() => {
            modalContext.createResource.open();
          }}
        />
        {searchResults.map((resource) => (
          <CollectionResourceContext.Provider value={resource} key={resource.id}>
            <SidebarCollectionResource key={resource.id} />
          </CollectionResourceContext.Provider>
        ))}
      </div>
      <ResourcesFooter>
        <CollectionHeaderSearch />
      </ResourcesFooter>
    </div>
  );
}
