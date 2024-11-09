import { DriveFinderModals } from '@/(core)/(dashboard)/drive/finder/modals/controller/main';
import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { DriveFinderGalleryCollectionAdd } from '../../../../../common/collection/add/main';
import { DriveFinderCollection } from '../../../../../common/collection/main';
import { DriveFinderCreateCollectionModal } from '../../../../../modals/create/collection/main';

export function DriveFinderGalleryCollectionsGrid() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <DriveFinderCreateCollectionModal />
      </ContextForOpenable.Provider>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='grid grid-cols-4 gap-[2rem] pr-[2rem]'>
          {collectionListController.state.more.queryResults.map(
            (collection) => (
              <ContextForGalleryCollectionObj.Provider
                value={collection}
                key={collection.id}
              >
                <DriveFinderModals>
                  <DriveFinderCollection key={collection.id} />
                </DriveFinderModals>
              </ContextForGalleryCollectionObj.Provider>
            ),
          )}
          <DriveFinderGalleryCollectionAdd
            onClick={() => openableController.open()}
          />
        </div>
      </div>
    </>
  );
}
