import { useContext } from 'react';
import { ArchiveExplorerCreateModalContext } from './main';
import { ExplorerCreateCollectionModal } from './collection/main';
import { ExplorerCreateGalleryModal } from './gallery/main';
import { ExplorerCreateResourceModal } from './resource/main';

export function ArchiveExplorerModalView() {
  const modalContext = useContext(ArchiveExplorerCreateModalContext);

  return (
    <>
      {modalContext.createCollection && (
        <ExplorerCreateCollectionModal />
      )}
      {modalContext.createGallery && (
        <ExplorerCreateGalleryModal />
      )}
      {modalContext.createResource && (
        <ExplorerCreateResourceModal/>
      )}
    </>
  );
}
