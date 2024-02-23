import { createContext, useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { SidebarCollectionAdd } from '../../../../../../../../../(studio)/vault/(vault-stages)/explorer/collections-view/[id]/(collections-epic)/sidebar-collection/add/main';
import { SidebarCollection } from '../../../../../../../../../(studio)/vault/(vault-stages)/explorer/collections-view/[id]/(collections-epic)/sidebar-collection/main';
import {
  CollectionsModalContext,
  useCollectionsModal,
} from '@/(modals)/collections-modal/main';
import { CollectionsModalView } from '@/(modals)/collections-modal/view';
import { CollectionContext, CollectionObj } from '@/(logic)/model/gallery/collection/main';

export function CollectionsInterface() {
  const { collections } = useContext(DraftSidebarContext);
  const modalContext = useCollectionsModal();

  return (
    <CollectionsModalContext.Provider value={modalContext}>
      <CollectionsModalView />
      <div className='flex flex-col space-y-[2rem]'>
        {collections.map((collection) => (
          // eslint-disable-next-line react/jsx-key
          <CollectionContext.Provider value={collection}>
            <SidebarCollection />
          </CollectionContext.Provider>
        ))}
        <SidebarCollectionAdd
          onClick={() => {
            modalContext.draftCreateCollectionModal.open();
          }}
        />
      </div>
    </CollectionsModalContext.Provider>
  );
}
