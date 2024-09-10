import { GalleryExplorerAdd } from '@/(core)/(dashboard)/vault/(pages)/explorer/(common)/gallery/add/main';
import { ExplorerGallery } from '@/(core)/(dashboard)/vault/(pages)/explorer/(common)/gallery/main';
import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { ExplorerCreateGalleryModal } from '../../../../(modals)/create/gallery/main';

export function ExplorerHomeGallerysGrid() {
  const galleryListController = useContext(ContextForGalleryList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <ExplorerCreateGalleryModal />
      </ContextForOpenable.Provider>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='grid grid-cols-3 gap-[2rem] pr-[2rem]'>
          {galleryListController.state.more.queryResults.map((gallery) => (
            <ContextForGalleryObj.Provider value={gallery} key={gallery.id}>
              <ExplorerGallery key={gallery.id} />
            </ContextForGalleryObj.Provider>
          ))}
          <GalleryExplorerAdd onClick={openableController.open} />
        </div>
      </div>
    </>
  );
}
