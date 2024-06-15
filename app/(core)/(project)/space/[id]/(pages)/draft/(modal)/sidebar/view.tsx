import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useContext } from 'react';
import { SpaceDraftCreateCollectionModal } from './collection/main';
import { SpaceDraftCreateGalleryModal } from './gallery/main';
import { ContextForSidebarModals } from './main';
import { SpaceDraftCreateResourceModal } from './resource/main';

export function SidebarModalsView() {
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <>
      {modalContext.createCollection && (
        <ContextForOpenable.Provider value={modalContext.createCollection}>
          <SpaceDraftCreateCollectionModal />
        </ContextForOpenable.Provider>
      )}
      {modalContext.createGallery && (
        <ContextForOpenable.Provider value={modalContext.createGallery}>
          <SpaceDraftCreateGalleryModal />
        </ContextForOpenable.Provider>
      )}
      {modalContext.createResource && (
        <ContextForOpenable.Provider value={modalContext.createResource}>
          <SpaceDraftCreateResourceModal />
        </ContextForOpenable.Provider>
      )}
    </>
  );
}
