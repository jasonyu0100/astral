import { useContext } from 'react';
import { GalleryContext } from '@/(model)/media/gallery/main';
import { GallerysHandlerContext } from '@/(controller)/explorer/gallerys/main';
import { ArchiveExplorerCreateModalContext } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { GalleryExplorerAdd } from '@/(components)/(media)/(gallery-folder)/explorer/add/main';
import { ExplorerGallery } from '@/(components)/(media)/(gallery-folder)/explorer/main';

export function GallerysGrid() {
  const gallerysHandler = useContext(GallerysHandlerContext);
  const gallerys = gallerysHandler.gallerys;
  const modalContext = useContext(ArchiveExplorerCreateModalContext);

  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <div className='flex w-full flex-row flex-wrap items-center gap-[2rem]'>
        {gallerys.map((gallery) => (
          <GalleryContext.Provider value={gallery} key={gallery.id}>
            <ExplorerGallery key={gallery.id} />
          </GalleryContext.Provider>
        ))}
        <GalleryExplorerAdd onClick={() => modalContext.createGallery.open()} />
      </div>
    </div>
  );
}
