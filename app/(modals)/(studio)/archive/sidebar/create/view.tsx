import { useContext } from 'react';
import { ArchiveSidebarCreateModalContext } from './main';
import { SidebarCreateCollectionModal } from './collection/main';
import { SidebarCreateGalleryModal } from './gallery/main';
import { SidebarCreateResourceModal } from './resource/main';

export function ArchiveSidebarCreateModalView() {
  const modalContext = useContext(ArchiveSidebarCreateModalContext);

  return (
    <>
      {modalContext.createCollection && (
        <SidebarCreateCollectionModal />
      )}
      {modalContext.createGallery && (
        <SidebarCreateGalleryModal />
      )}
      {modalContext.createResource && (
        <SidebarCreateResourceModal/>
      )}
    </>
  );
}
