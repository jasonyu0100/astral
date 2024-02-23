import { useContext } from 'react';
import { ExplorerCreateGalleryModal } from './explorer-create-gallery/main';
import { GallerysModalContext } from './main';
import { DraftCreateGalleryModal } from './draft-create-gallery/main';

export function GallerysModalView() {
  const modalContext = useContext(GallerysModalContext);

  return (
    <>
      {modalContext.explorerCreateGalleryModal.opened && (
        <ExplorerCreateGalleryModal />
      )}
      {modalContext.draftCreateGalleryModal.opened && (
        <DraftCreateGalleryModal />
      )}
    </>
  );
}
