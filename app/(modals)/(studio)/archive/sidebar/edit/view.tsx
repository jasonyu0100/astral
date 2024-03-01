import { useContext } from 'react';
import { ArchiveSidebarEditModalContext } from './main';
import { SidebarEditGalleryModal } from './gallery/main';
import { SidebarEditResourceModal } from './resource/main';

export function ArchiveSidebarCreateModalView() {
  const modalContext = useContext(ArchiveSidebarEditModalContext);

  return (
    <>
      {modalContext.editGallery && (
        <SidebarEditGalleryModal />
      )}
      {modalContext.editResource && (
        <SidebarEditResourceModal />
      )}
    </>
  );
}
