import { useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { CollectionResourceAdd } from './add-resource/main';
import { CollectionHeader } from './header/main';
import { CollectionHeaderSearch } from './header/search/main';
import { CollectionResource } from './resource/main';
import { ResourcesModalContext, useResourceModal } from '@/(cosmos)/(modals)/resources-modal/main';
import { ResourcesModalView } from '@/(cosmos)/(modals)/resources-modal/view';

export function ResourcesInterface() {
  const { searchResults } = useContext(DraftSidebarContext);
  const modalContext = useResourceModal()

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
            <CollectionResource resource={resource} />
          ))}
        </div>
        <CollectionHeader>
          <CollectionHeaderSearch />
        </CollectionHeader>
      </div>
    </ResourcesModalContext.Provider>
  );
}
