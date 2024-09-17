import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { VaultFinderEditCollectionModal } from '../collection/main';
import { VaultFinderEditGalleryModal } from '../gallery/main';
import { VaultFinderEditResourceModal } from '../resource/main';

export const ContextForVaultFinderEditModals = createContext({} as Controller);

export interface Controller {
  editCollectionController: ContextForOpenableInterface;
  editGalleryController: ContextForOpenableInterface;
  editResourceController: ContextForOpenableInterface;
}

export function VaultFinderEditModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const editCollectionController = useControllerForOpenable();
  const editGalleryController = useControllerForOpenable();
  const editResourceController = useControllerForOpenable();

  return (
    <ContextForVaultFinderEditModals.Provider
      value={{
        editCollectionController: editCollectionController,
        editGalleryController: editGalleryController,
        editResourceController: editResourceController,
      }}
    >
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
    </ContextForVaultFinderEditModals.Provider>
  );
}
