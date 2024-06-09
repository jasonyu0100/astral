import { useContext } from 'react';
import { ContextForGalleryObj } from '@/(model)/gallery/main';
import { ContextForExplorerModals } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { GalleryExplorerAdd } from '@/(components)/(media)/(gallery-folder)/explorer/add/main';
import { ExplorerGallery } from '@/(components)/(media)/(gallery-folder)/explorer/main';
import { ContextForGalleryList } from '@/(model)/(controller)/gallery/list';

export function GallerysGrid() {
  const galleryListController = useContext(ContextForGalleryList);
  const modalContext = useContext(ContextForExplorerModals);

  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <div className='flex w-full flex-row flex-wrap items-center gap-[2rem]'>
        {galleryListController.state.objs.map((gallery) => (
          <ContextForGalleryObj.Provider value={gallery} key={gallery.id}>
            <ExplorerGallery key={gallery.id} />
          </ContextForGalleryObj.Provider>
        ))}
        <GalleryExplorerAdd onClick={() => modalContext.createGallery.open()} />
      </div>
    </div>
  );
}
