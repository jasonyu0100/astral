import { useContext, useState } from 'react';
import { ContextForExplorerModals } from './main';
import { ExplorerCreateCollectionModal } from './collection/main';
import { ExplorerCreateGalleryModal } from './gallery/main';
import { ExplorerCreateResourceModal } from './resource/main';
import {
  ContextForOpenable,
} from '@/(logic)/contexts/openable/main';

export function ExplorerModalsView() {
  const modalContext = useContext(ContextForExplorerModals);

  return (
    <>
      <ContextForOpenable.Provider value={modalContext.createCollection}>
        <ExplorerCreateCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.createGallery}>
        <ExplorerCreateGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.createResource}>
        <ExplorerCreateResourceModal />
      </ContextForOpenable.Provider>
    </>
  );
}
