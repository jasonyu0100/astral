import { useContext } from 'react';
import { GalleryContext } from '@/(model)/gallery/main';
import { ArchiveSidebarCreateModalContext } from '@/(core)/(dashboard)/(modals)/archive/sidebar/create/main';
import { GallerysHandlerContext } from '@/(controller)/(archive)/explorer/gallerys/main';
import { SidebarHomeGalleryAdd } from '@/(components)/(media)/(gallery-folder)/sidebar/add/main';
import { SidebarHomeGallery } from '@/(components)/(media)/(gallery-folder)/sidebar/main';

export function SidebarGallerysInterface() {
  const gallerysHandler = useContext(GallerysHandlerContext);
  const gallerys = gallerysHandler.gallerys;
  const modalContext = useContext(ArchiveSidebarCreateModalContext);

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex w-full flex-row flex-wrap space-y-[2rem] overflow-auto pr-[1rem]'>
        <SidebarHomeGalleryAdd
          onClick={() => modalContext.createGallery.open()}
        />
        {gallerys.map((gallery) => (
          <GalleryContext.Provider value={gallery} key={gallery.id}>
            <SidebarHomeGallery key={gallery.id} />
          </GalleryContext.Provider>
        ))}
      </div>
      <p className='font-bold text-slate-500'>Back</p>
    </div>
  );
}
