import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { VaultFinderCreateCollectionModal } from '../collection/main';
import { VaultFinderCreateGalleryModal } from '../gallery/main';
import { VaultFinderCreateResourceModal } from '../resource/main';

export const ContextForVaultFinderCreateModals = createContext(
  {} as Controller,
);

export interface Controller {
  createCollectionController: ContextForOpenableInterface;
  createGalleryController: ContextForOpenableInterface;
  createResourceController: ContextForOpenableInterface;
}

export function VaultFinderCreateModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const createCollectionController = useControllerForOpenable();
  const createGalleryController = useControllerForOpenable();
  const createResourceController = useControllerForOpenable();

  return (
    <ContextForVaultFinderCreateModals.Provider
      value={{
        createCollectionController,
        createGalleryController,
        createResourceController,
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
      {children}
    </ContextForVaultFinderCreateModals.Provider>
  );
}
