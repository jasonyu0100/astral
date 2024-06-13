import { useContext } from 'react';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { ContextForSidebarModals } from '@/(core)/(project)/space/[id]/(pages)/board/view/sidebar/(modals)/create/main';
import { SidebarHomeGalleryAdd } from '@/(components)/(media)/(gallery)/sidebar/add/main';
import { SidebarHomeGallery } from '@/(components)/(media)/(gallery)/sidebar/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';

export function SidebarGallerysInterface() {
  const galleryListController = useContext(ContextForGalleryList);
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex w-full flex-row flex-wrap space-y-[2rem] overflow-auto'>
        <SidebarHomeGalleryAdd
          onClick={() => modalContext.createGallery.open()}
        />
        {galleryListController.state.objs.map((gallery) => (
          <ContextForGalleryObj.Provider value={gallery} key={gallery.id}>
            <SidebarHomeGallery key={gallery.id} />
          </ContextForGalleryObj.Provider>
        ))}
      </div>
      <p className='font-bold text-slate-500'>Back</p>
    </div>
  );
}
