import { useContext } from 'react';
import { ContextForSidebarModals } from './main';
import { SidebarCreateCollectionModal } from './collection/main';
import { SidebarCreateGalleryModal } from './gallery/main';
import { SidebarCreateResourceModal } from './resource/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

export function SidebarModalsView() {
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <>
      {modalContext.createCollection && (
        <ContextForOpenable.Provider value={modalContext.createCollection}>
          <SidebarCreateCollectionModal />
        </ContextForOpenable.Provider>
      )}
      {modalContext.createGallery && (
        <ContextForOpenable.Provider value={modalContext.createGallery}>
          <SidebarCreateGalleryModal />
        </ContextForOpenable.Provider>
      )}
      {modalContext.createResource && (
        <ContextForOpenable.Provider value={modalContext.createResource}>
          <SidebarCreateResourceModal />
        </ContextForOpenable.Provider>
      )}
    </>
  );
}
