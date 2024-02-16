import { createContext, useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { CollectionResourceAdd } from './add-resource/main';
import { CollectionHeader } from './header/main';
import { CollectionHeaderSearch } from './header/search/main';
import { CollectionResource } from './resource/main';
import {
  ResourcesModalContext,
  useResourceModal,
} from '@/(verses)/(modals)/resources-modal/main';
import { ResourcesModalView } from '@/(verses)/(modals)/resources-modal/view';
import { ResourceContext, ResourceObj } from '@/(ouros)/(model)/resource/main';

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
              <CollectionResource />
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
