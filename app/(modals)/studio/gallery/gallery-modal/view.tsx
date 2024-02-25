import { useContext } from 'react';
import { ArchiveEditGalleryModal } from './vault-edit-gallery/main';
import { GalleryModalContext } from './main';

export function GalleryModalView() {
  const modalContext = useContext(GalleryModalContext);

  return <>{modalContext.editGalleryModal.opened && <ArchiveEditGalleryModal />}</>;
}
