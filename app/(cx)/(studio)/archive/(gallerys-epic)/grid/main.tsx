import { useContext } from 'react';
import { GalleryExplorerAdd } from '../gallery/explorer/add/main';
import { ExplorerGallery } from '../gallery/explorer/main';
import { GalleryContext } from '@/(logic)/internal/data/infra/model/gallery/main';
import { GallerysHandlerContext } from '@/(logic)/internal/handler/explorer/gallerys/main';
import { ArchiveExplorerCreateModalContext } from '@/(modals)/(studio)/archive/explorer/create/main';

export function GallerysGrid() {
  const gallerysHandler = useContext(GallerysHandlerContext);
  const gallerys = gallerysHandler.gallerys;
  const modalContext = useContext(ArchiveExplorerCreateModalContext);

  return (
    <div className='flex w-full flex-row flex-wrap items-center gap-[50px] pb-[50px]'>
      {gallerys.map((gallery) => (
        <GalleryContext.Provider value={gallery} key={gallery.id}>
          <ExplorerGallery key={gallery.id}/>
        </GalleryContext.Provider>
      ))}
      <GalleryExplorerAdd onClick={() => modalContext.createGallery.open()} />
    </div>
  );
}
