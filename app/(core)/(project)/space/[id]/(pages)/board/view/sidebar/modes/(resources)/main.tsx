import { CollectionResourceAdd } from '@/(components)/(media)/(resource)/sidebar/add/main';
import { SidebarCollectionResource } from '@/(components)/(media)/(resource)/sidebar/main';
import { ContextForSidebarModals } from '@/(core)/(project)/space/[id]/(pages)/board/(modal)/sidebar/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import {
  CollectionResourceObj,
  ContextForCollectionResourceObj,
} from '@/(server)/(model)/gallery/collection/resource/main';
import { createContext, useContext } from 'react';
import { Footer } from './footer/main';
import { CollectionHeaderSearch } from './footer/search/view';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpaceBoardCollectionResourcesMode() {
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
        {resourceListController.state.more.queryResults.map((resource) => (
          <ContextForCollectionResourceObj.Provider
            value={resource}
            key={resource.id}
          >
            <SidebarCollectionResource key={resource.id} />
          </ContextForCollectionResourceObj.Provider>
        ))}
      </div>
      <Footer>
        <CollectionHeaderSearch />
      </Footer>
    </div>
  );
}
