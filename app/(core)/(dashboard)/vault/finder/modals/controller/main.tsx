import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { VaultFinderCreateCollectionModal } from '../create/collection/main';
import { VaultFinderCreateGalleryModal } from '../create/gallery/main';
import { VaultFinderCreateResourceModal } from '../create/resource/main';
import { VaultFinderEditCollectionModal } from '../edit/collection/main';
import { VaultFinderEditGalleryModal } from '../edit/gallery/main';
import { VaultFinderEditResourceModal } from '../edit/resource/main';

export const ContextForVaultFinderModals = createContext({} as Controller);

interface Controller {
  createCollectionController: ContextForOpenableInterface;
  createGalleryController: ContextForOpenableInterface;
  createResourceController: ContextForOpenableInterface;
  editCollectionController: ContextForOpenableInterface;
  editGalleryController: ContextForOpenableInterface;
  editResourceController: ContextForOpenableInterface;
}

export function VaultFinderModals({ children }: { children: React.ReactNode }) {
  const createCollectionController = useControllerForOpenable();
  const createGalleryController = useControllerForOpenable();
  const createResourceController = useControllerForOpenable();
  const editCollectionController = useControllerForOpenable();
  const editGalleryController = useControllerForOpenable();
  const editResourceController = useControllerForOpenable();

  return (
    <ContextForVaultFinderModals.Provider
      value={{
        createCollectionController,
        createGalleryController,
        createResourceController,
        editCollectionController,
        editGalleryController,
        editResourceController,
      }}
    >
      <ContextForOpenable.Provider value={createCollectionController}>
        <VaultFinderCreateCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createGalleryController}>
        <VaultFinderCreateGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createResourceController}>
        <VaultFinderCreateResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editCollectionController}>
        <VaultFinderEditCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editGalleryController}>
        <VaultFinderEditGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editResourceController}>
        <VaultFinderEditResourceModal />
      </ContextForOpenable.Provider>
      {children}
    </ContextForVaultFinderModals.Provider>
  );
}
