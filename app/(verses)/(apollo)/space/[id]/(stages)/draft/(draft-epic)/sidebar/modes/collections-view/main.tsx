import { createContext, useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { GalleryCollectionAdd } from './add-collection/main';
import { GalleryCollection } from './collection/main';
import {
  CollectionsModalContext,
  useCollectionsModal,
} from '@/(verses)/(modals)/collections-modal/main';
import { CollectionsModalView } from '@/(verses)/(modals)/collections-modal/view';
import { CollectionContext, CollectionObj } from '@/(ouros)/(model)/gallery/collection/main';

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
            <GalleryCollection />
          </CollectionContext.Provider>
        ))}
        <GalleryCollectionAdd
          onClick={() => {
            modalContext.draftCreateCollectionModal.open();
          }}
        />
      </div>
    </CollectionsModalContext.Provider>
  );
}
