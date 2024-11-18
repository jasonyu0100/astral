import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { BrandManageGalleryAdd } from '../../../../common/gallery/add/main';
import { BrandManageGallery } from '../../../../common/gallery/main';
import { BrandManageModals } from '../../../../modals/controller/main';
import { BrandManageCreateGalleryModal } from '../../../../modals/create/gallery/main';

export function BrandManageHomeGallerysGrid() {
  const galleryListController = useContext(ContextForGalleryList);
  const openableController = useControllerForOpenable();

  return (
    <ContextForOpenable.Provider value={openableController}>
      <BrandManageCreateGalleryModal />
      <div className='h-full flex-grow overflow-auto'>
        <div className='grid grid-cols-4 gap-[2rem] pr-[2rem]'>
          {galleryListController.state.more.queryResults.map((gallery) => (
            <ContextForGalleryObj.Provider value={gallery} key={gallery.id}>
              <BrandManageModals>
                <BrandManageGallery key={gallery.id} />
              </BrandManageModals>
            </ContextForGalleryObj.Provider>
          ))}
          <BrandManageGalleryAdd onClick={openableController.open} />
        </div>
      </div>
    </ContextForOpenable.Provider>
  );
}
