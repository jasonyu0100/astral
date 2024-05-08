import { useContext } from 'react';
import { GalleryExplorerAdd } from '../../../../../../../../(components)/(explorer)/(gallery-assets-epic)/explorer/add/main';
import { ExplorerGallery } from '../../../../../../../../(components)/(explorer)/(gallery-assets-epic)/explorer/main';
import { GalleryContext } from '@/(types)/model/gallery/main';
import { GallerysHandlerContext } from '@/(types)/handler/explorer/gallerys/main';
import { ArchiveExplorerCreateModalContext } from '@/(core)/(board)/(modals)/archive/explorer/create/main';

export function GallerysGrid() {
  const gallerysHandler = useContext(GallerysHandlerContext);
  const gallerys = gallerysHandler.gallerys;
  const modalContext = useContext(ArchiveExplorerCreateModalContext);

  return (
    <div className='flex-grow overflow-auto py-[2rem]' style={{ height: '100%' }}>
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
