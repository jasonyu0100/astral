import { useContext } from 'react';
import { SidebarHomeGalleryAdd } from '../../../../../../../../../../(lib)/(explorer)/(gallery-assets-epic)/sidebar/add/main';
import { SidebarHomeGallery } from '../../../../../../../../../../(lib)/(explorer)/(gallery-assets-epic)/sidebar/main';
import { GalleryContext } from '@/(lgx)/internal/model/gallery/main';
import { ArchiveSidebarCreateModalContext } from '@/(cx)/(center)/(modals)/archive/sidebar/create/main';
import { GallerysHandlerContext } from '@/(lgx)/internal/handler/explorer/gallerys/main';

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
