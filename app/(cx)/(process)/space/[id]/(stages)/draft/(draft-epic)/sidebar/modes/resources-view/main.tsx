import { createContext, useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { CollectionResourceAdd } from '../../../../../../../../../(studio)/archive/(archive-stages)/explorer/resources-view/sidebar-resource/add-resource/main';
import { CollectionHeader } from './header/main';
import { CollectionHeaderSearch } from './header/search/main';
import { SidebarCollectionResource } from '../../../../../../../../../(studio)/archive/(archive-stages)/explorer/resources-view/sidebar-resource/main';
import {
  ResourcesModalContext,
  useResourceModal,
} from '@/(modals)/resources-modal/main';
import { ResourcesModalView } from '@/(modals)/resources-modal/view';
import { ResourceContext, ResourceObj } from '@/(logic)/model/resource/main';

export const SidebarResourceContext = createContext({} as ResourceObj);

export function ResourcesInterface() {
  const { searchResults } = useContext(DraftSidebarContext);
  const modalContext = useResourceModal();

  return (
    <ResourcesModalContext.Provider value={modalContext}>
      <ResourcesModalView />
      <div className='flex h-full flex-col space-y-[2rem]'>
        <div className='h-full w-full flex-col space-y-[1rem]'>
          <CollectionResourceAdd
            onClick={() => {
              modalContext.draftAddResourceModal.open();
            }}
          />
          {searchResults.map((resource) => (
            // eslint-disable-next-line react/jsx-key
            <ResourceContext.Provider value={resource}>
              <SidebarCollectionResource />
            </ResourceContext.Provider>
          ))}
        </div>
        <CollectionHeader>
          <CollectionHeaderSearch />
        </CollectionHeader>
      </div>
    </ResourcesModalContext.Provider>
  );
}
