import { useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { GalleryCollectionAdd } from './add-collection/main';
import { GalleryCollection } from './collection/main';
import { CollectionsModalContext, useCollectionsModal } from '@/(cosmos)/(modals)/collections-modal/main';
import { CollectionsModalView } from '@/(cosmos)/(modals)/collections-modal/view';

export function CollectionsInterface() {
  const { collections } = useContext(DraftSidebarContext);
  const modalContext = useCollectionsModal();

  return (
    <CollectionsModalContext.Provider value={modalContext}>
      <CollectionsModalView />
      <div className='flex flex-col space-y-[2rem]'>
        {collections.map((collection) => (
          <GalleryCollection collection={collection} />
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
