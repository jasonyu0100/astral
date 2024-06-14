import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useContext } from 'react';
import { SpaceBoardCreateCollectionModal } from './collection/main';
import { SpaceBoardCreateGalleryModal } from './gallery/main';
import { ContextForSidebarModals } from './main';
import { SpaceBoardCreateResourceModal } from './resource/main';

export function SidebarModalsView() {
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <>
      {modalContext.createCollection && (
        <ContextForOpenable.Provider value={modalContext.createCollection}>
          <SpaceBoardCreateCollectionModal />
        </ContextForOpenable.Provider>
      )}
      {modalContext.createGallery && (
        <ContextForOpenable.Provider value={modalContext.createGallery}>
          <SpaceBoardCreateGalleryModal />
        </ContextForOpenable.Provider>
      )}
      {modalContext.createResource && (
        <ContextForOpenable.Provider value={modalContext.createResource}>
          <SpaceBoardCreateResourceModal />
        </ContextForOpenable.Provider>
      )}
    </>
  );
}
