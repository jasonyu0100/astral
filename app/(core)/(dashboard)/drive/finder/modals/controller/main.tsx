import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { DriveFinderCreateCollectionModal } from '../create/collection/main';
import { DriveFinderCreateGalleryModal } from '../create/gallery/main';
import { DriveFinderCreateResourceModal } from '../create/resource/main';
import { DriveFinderEditCollectionModal } from '../edit/collection/main';
import { DriveFinderEditGalleryModal } from '../edit/gallery/main';
import { DriveFinderEditResourceModal } from '../edit/resource/main';

export const ContextForDriveFinderModals = createContext({} as Controller);

interface Controller {
  createCollectionController: ContextForOpenableInterface;
  createGalleryController: ContextForOpenableInterface;
  createResourceController: ContextForOpenableInterface;
  editCollectionController: ContextForOpenableInterface;
  editGalleryController: ContextForOpenableInterface;
  editResourceController: ContextForOpenableInterface;
}

export function DriveFinderModals({ children }: { children: React.ReactNode }) {
  const createCollectionController = useControllerForOpenable();
  const createGalleryController = useControllerForOpenable();
  const createResourceController = useControllerForOpenable();
  const editCollectionController = useControllerForOpenable();
  const editGalleryController = useControllerForOpenable();
  const editResourceController = useControllerForOpenable();

  return (
    <ContextForDriveFinderModals.Provider
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
        <DriveFinderCreateCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createGalleryController}>
        <DriveFinderCreateGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createResourceController}>
        <DriveFinderCreateResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editCollectionController}>
        <DriveFinderEditCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editGalleryController}>
        <DriveFinderEditGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editResourceController}>
        <DriveFinderEditResourceModal />
      </ContextForOpenable.Provider>
      {children}
    </ContextForDriveFinderModals.Provider>
  );
}
