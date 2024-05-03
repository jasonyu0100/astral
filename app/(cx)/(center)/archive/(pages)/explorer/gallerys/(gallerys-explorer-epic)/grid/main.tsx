import { useContext } from 'react';
import { GalleryExplorerAdd } from '../../../../../../../../(pkgs)/(explorer)/(gallery-assets-epic)/explorer/add/main';
import { ExplorerGallery } from '../../../../../../../../(pkgs)/(explorer)/(gallery-assets-epic)/explorer/main';
import { GalleryContext } from '@/(lgx)/internal/model/gallery/main';
import { GallerysHandlerContext } from '@/(lgx)/internal/handler/explorer/gallerys/main';
import { ArchiveExplorerCreateModalContext } from '@/(cx)/(center)/(modals)/archive/explorer/create/main';

export function GallerysGrid() {
  const gallerysHandler = useContext(GallerysHandlerContext);
  const gallerys = gallerysHandler.gallerys;
  const modalContext = useContext(ArchiveExplorerCreateModalContext);

  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <div className='flex w-full flex-row flex-wrap items-center gap-[2rem] py-[2rem]'>
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
