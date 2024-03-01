import { useContext } from 'react';
import { ArchiveExplorerEditModalContext } from './main';
import { ExplorerEditGalleryModal } from '../edit/gallery/main';
import { ExplorerEditResourceModal } from '../edit/resource/main';

export function ArchiveExplorerModalEditView() {
  const modalContext = useContext(ArchiveExplorerEditModalContext);

  return (
    <>
      {modalContext.editGallery && (
        <ExplorerEditGalleryModal />
      )}
      {modalContext.editResource && (
        <ExplorerEditResourceModal />
      )}
    </>
  );
}
