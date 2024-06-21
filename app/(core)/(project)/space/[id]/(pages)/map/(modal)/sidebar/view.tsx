import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useContext } from 'react';
import { SpaceMapCreateCollectionModal } from './collection/main';
import { SpaceMapCreateGalleryModal } from './gallery/main';
import { ContextForSidebarModals } from './main';
import { SpaceMapCreateResourceModal } from './resource/main';

export function SidebarModalsView() {
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <>
      {modalContext.createCollection && (
        <ContextForOpenable.Provider value={modalContext.createCollection}>
          <SpaceMapCreateCollectionModal />
        </ContextForOpenable.Provider>
      )}
      {modalContext.createGallery && (
        <ContextForOpenable.Provider value={modalContext.createGallery}>
          <SpaceMapCreateGalleryModal />
        </ContextForOpenable.Provider>
      )}
      {modalContext.createResource && (
        <ContextForOpenable.Provider value={modalContext.createResource}>
          <SpaceMapCreateResourceModal />
        </ContextForOpenable.Provider>
      )}
    </>
  );
}
