import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { GalleryFinderAdd } from '../../../../common/gallery/add/main';
import { FinderGallery } from '../../../../common/gallery/main';
import { VaultFinderModals } from '../../../../modals/controller/main';
import { VaultFinderCreateGalleryModal } from '../../../../modals/create/gallery/main';

export function FinderHomeGallerysGrid() {
  const galleryListController = useContext(ContextForGalleryList);
  const openableController = useControllerForOpenable();

  return (
    <ContextForOpenable.Provider value={openableController}>
      <VaultFinderCreateGalleryModal />
      <div className='h-full flex-grow overflow-auto'>
        <div className='grid grid-cols-4 gap-[2rem] pr-[2rem]'>
          {galleryListController.state.more.queryResults.map((gallery) => (
            <ContextForGalleryObj.Provider value={gallery} key={gallery.id}>
              <VaultFinderModals>
                <FinderGallery key={gallery.id} />
              </VaultFinderModals>
            </ContextForGalleryObj.Provider>
          ))}
          <GalleryFinderAdd onClick={openableController.open} />
        </div>
      </div>
    </ContextForOpenable.Provider>
  );
}
