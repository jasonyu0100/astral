import { useContext } from 'react';
import { SidebarHomeGalleryAdd } from '../../../../../../../../../(studio)/archive/(gallerys-epic)/gallery/sidebar/add/main';
import { SidebarHomeGallery } from '../../../../../../../../../(studio)/archive/(gallerys-epic)/gallery/sidebar/main';
import { GalleryContext } from '@/(logic)/internal/data/infra/model/gallery/main';
import { ArchiveSidebarCreateModalContext } from '@/(modals)/(studio)/archive/sidebar/create/main';
import { GallerysHandlerContext } from '@/(logic)/internal/handler/explorer/gallerys/main';

export function SidebarGallerysInterface() {
  const gallerysHandler = useContext(GallerysHandlerContext);
  const gallerys = gallerysHandler.gallerys;
  const modalContext = useContext(ArchiveSidebarCreateModalContext);

  return (
    <div className='flex flex-col space-y-[1rem]' style={{ height: '100%' }}>
      {gallerys.map((gallery) => (
        <GalleryContext.Provider value={gallery} key={gallery.id}>
          <SidebarHomeGallery key={gallery.id}/>
        </GalleryContext.Provider>
      ))}
      <SidebarHomeGalleryAdd
        onClick={() => modalContext.createGallery.open()}
      />
    </div>
  );
}
