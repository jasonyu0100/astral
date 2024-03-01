import { useContext } from 'react';
import { ArchiveExplorerModalContext } from './main';
import { ExplorerCreateCollectionModal } from './create/collection/main';
import { ExplorerEditGalleryModal } from './edit/gallery/main';
import { ExplorerCreateGalleryModal } from './create/gallery/main';
import { ExplorerEditResourceModal } from './edit/resource/main';
import { ExplorerCreateResourceModal } from './create/resource/main';

export function ArchiveExplorerModalView() {
  const modalContext = useContext(ArchiveExplorerModalContext);

  return (
    <>
      {modalContext.createCollection && (
        <ExplorerCreateCollectionModal />
      )}
      {modalContext.editGallery && (
        <ExplorerEditGalleryModal />
      )}
      {modalContext.createGallery && (
        <ExplorerCreateGalleryModal />
      )}
      {modalContext.editResource && (
        <ExplorerEditResourceModal />
      )}
      {modalContext.createResource && (
        <ExplorerCreateResourceModal/>
      )}
    </>
  );
}
