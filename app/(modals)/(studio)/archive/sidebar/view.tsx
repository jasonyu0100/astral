import { useContext } from 'react';
import { ArchiveSidebarModalContext } from './main';
import { SidebarCreateCollectionModal } from './create/collection/main';
import { SidebarEditGalleryModal } from './edit/gallery/main';
import { SidebarCreateGalleryModal } from './create/gallery/main';
import { SidebarEditResourceModal } from './edit/resource/main';
import { SidebarCreateResourceModal } from './create/resource/main';

export function ArchiveSidebarModalView() {
  const modalContext = useContext(ArchiveSidebarModalContext);

  return (
    <>
      {modalContext.createCollection && (
        <SidebarCreateCollectionModal />
      )}
      {modalContext.editGallery && (
        <SidebarEditGalleryModal />
      )}
      {modalContext.createGallery && (
        <SidebarCreateGalleryModal />
      )}
      {modalContext.editResource && (
        <SidebarEditResourceModal />
      )}
      {modalContext.createResource && (
        <SidebarCreateResourceModal/>
      )}
    </>
  );
}
