import { BrandManageModals } from '@/(core)/(dashboard)/brand/manage/modals/controller/main';
import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { BrandManageGalleryCollectionAdd } from '../../../../../common/collection/add/main';
import { BrandManageCollection } from '../../../../../common/collection/main';
import { BrandManageCreateCollectionModal } from '../../../../../modals/create/collection/main';

export function BrandManageGalleryCollectionsGrid() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <BrandManageCreateCollectionModal />
      </ContextForOpenable.Provider>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='grid grid-cols-4 gap-[2rem] pr-[2rem]'>
          {collectionListController.state.more.queryResults.map(
            (collection) => (
              <ContextForGalleryCollectionObj.Provider
                value={collection}
                key={collection.id}
              >
                <BrandManageModals>
                  <BrandManageCollection key={collection.id} />
                </BrandManageModals>
              </ContextForGalleryCollectionObj.Provider>
            ),
          )}
          <BrandManageGalleryCollectionAdd
            onClick={() => openableController.open()}
          />
        </div>
      </div>
    </>
  );
}
