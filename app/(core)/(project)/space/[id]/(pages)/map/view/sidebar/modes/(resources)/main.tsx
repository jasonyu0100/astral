import { createContext, useContext } from 'react';
import { ResourcesFooter } from './footer/main';
import { CollectionHeaderSearch } from './footer/search/main';
import { ContextForCollectionResourceObj, CollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { ContextForSidebarModals } from '@/(core)/(project)/space/[id]/(pages)/map/view/sidebar/(modals)/create/main';
import { CollectionResourceAdd } from '@/(components)/(media)/(resource-file)/sidebar/add/main';
import { SidebarCollectionResource } from '@/(components)/(media)/(resource-file)/sidebar/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';

export const SidebarResourceContext = createContext({} as CollectionResourceObj);

export function ResourcesInterface() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex w-full flex-row flex-wrap gap-[2rem] overflow-auto'>
        <CollectionResourceAdd
          onClick={() => {
            modalContext.createResource.open();
          }}
        />
        {resourceListController.state.queryResults.map((resource) => (
          <ContextForCollectionResourceObj.Provider value={resource} key={resource.id}>
            <SidebarCollectionResource key={resource.id} />
          </ContextForCollectionResourceObj.Provider>
        ))}
      </div>
      <ResourcesFooter>
        <CollectionHeaderSearch />
      </ResourcesFooter>
    </div>
  );
}
