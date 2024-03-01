import { useContext } from 'react';
import { ExplorerHomeContext } from '../../(archive-stages)/explorer/gallerys-view/page';
import { GalleryExplorerAdd } from '../gallery/explorer/add/main';
import { HomeGallery } from '../gallery/explorer/main';
import { GalleryContext } from '@/(logic)/internal/data/infra/model/gallery/main';
import { ArchiveExplorerModalContext } from '@/(modals)/(studio)/archive/explorer/main';

export function GallerysGrid() {
  const { gallerys } = useContext(ExplorerHomeContext);
  const modalContext = useContext(ArchiveExplorerModalContext);

  return (
    <div className='flex w-full flex-row flex-wrap items-center gap-[50px] pb-[50px]'>
      {gallerys.map((gallery) => (
        // eslint-disable-next-line react/jsx-key
        <GalleryContext.Provider value={gallery}>
          <HomeGallery />
        </GalleryContext.Provider>
      ))}
      <GalleryExplorerAdd onClick={() => modalContext.createGallery.open()} />
    </div>
  );
}
