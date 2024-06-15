import { SidebarHomeGalleryAdd } from '@/(components)/(media)/(gallery)/sidebar/add/main';
import { SidebarHomeGallery } from '@/(components)/(media)/(gallery)/sidebar/main';
import { ContextForSidebarModals } from '@/(core)/(project)/space/[id]/(pages)/draft/(modal)/sidebar/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { useContext } from 'react';

export function SpaceDraftSidebarHomeGallerysMode() {
  const galleryListController = useContext(ContextForGalleryList);
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <div className='flex h-full w-full flex-col pr-[1rem]'>
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
    </div>
  );
}
