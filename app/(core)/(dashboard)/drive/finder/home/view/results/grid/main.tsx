import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { DriveFinderGalleryAdd } from '../../../../common/gallery/add/main';
import { DriveFinderGallery } from '../../../../common/gallery/main';
import { DriveFinderModals } from '../../../../modals/controller/main';
import { DriveFinderCreateGalleryModal } from '../../../../modals/create/gallery/main';

export function DriveFinderHomeGallerysGrid() {
  const galleryListController = useContext(ContextForGalleryList);
  const openableController = useControllerForOpenable();

  return (
    <ContextForOpenable.Provider value={openableController}>
      <DriveFinderCreateGalleryModal />
      <div className='h-full flex-grow overflow-auto'>
        <div className='grid grid-cols-4 gap-[2rem] pr-[2rem]'>
          {galleryListController.state.more.queryResults.map((gallery) => (
            <ContextForGalleryObj.Provider value={gallery} key={gallery.id}>
              <DriveFinderModals>
                <DriveFinderGallery key={gallery.id} />
              </DriveFinderModals>
            </ContextForGalleryObj.Provider>
          ))}
          <DriveFinderGalleryAdd onClick={openableController.open} />
        </div>
      </div>
    </ContextForOpenable.Provider>
  );
}
