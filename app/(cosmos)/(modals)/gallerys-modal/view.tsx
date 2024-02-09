import { useContext } from 'react';
import { ExplorerCreateGalleryModal } from './explorer-create-gallery/main';
import { GallerysModalContext } from './main';
import { DraftCreateGalleryModal } from './draft-create-gallery/main';

export function GallerysModalView() {
  const { explorerCreateGalleryModal, draftCreateGalleryModal } =
    useContext(GallerysModalContext);

  return (
    <>
      {explorerCreateGalleryModal.opened && <ExplorerCreateGalleryModal />}
      {draftCreateGalleryModal.opened && <DraftCreateGalleryModal />}
    </>
  );
}
