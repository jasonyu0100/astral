import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { GalleryCollectionAdd } from '../../../../../(common)/collection/add/main';
import { ExplorerCollection } from '../../../../../(common)/collection/main';
import { ExplorerCreateCollectionModal } from '../../../../../(modals)/create/collection/main';

export function ExplorerGalleryCollectionsGrid() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <ExplorerCreateCollectionModal />
      </ContextForOpenable.Provider>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='grid grid-cols-4 gap-[2rem] pr-[2rem]'>
          {collectionListController.state.more.queryResults.map(
            (collection) => (
              <ContextForGalleryCollectionObj.Provider
                value={collection}
                key={collection.id}
              >
                <ExplorerCollection key={collection.id} />
              </ContextForGalleryCollectionObj.Provider>
            ),
          )}
          <GalleryCollectionAdd onClick={() => openableController.open()} />
        </div>
      </div>
    </>
  );
}
