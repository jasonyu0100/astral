import { useContext } from 'react';
import { VaultEditGalleryModal } from './vault-edit-gallery/main';
import { GalleryModalContext } from './main';

export function GalleryModalView() {
  const modalContext = useContext(GalleryModalContext);

  return <>{modalContext.editGalleryModal.opened && <VaultEditGalleryModal />}</>;
}
