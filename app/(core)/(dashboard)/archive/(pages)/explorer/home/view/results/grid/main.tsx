import { useContext } from 'react';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { GalleryExplorerAdd } from '@/(components)/(media)/(gallery)/explorer/add/main';
import { ExplorerGallery } from '@/(components)/(media)/(gallery)/explorer/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { ExplorerCreateGalleryModal } from '../../../../(modals)/create/gallery/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';

export function GallerysGrid() {
  const galleryListController = useContext(ContextForGalleryList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <ExplorerCreateGalleryModal />
      </ContextForOpenable.Provider>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='flex w-full flex-row flex-wrap items-center gap-[2rem]'>
          {galleryListController.state.objs.map((gallery) => (
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
