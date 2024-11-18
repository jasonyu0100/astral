import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { BrandManageCreateCollectionModal } from '../create/collection/main';
import { BrandManageCreateGalleryModal } from '../create/gallery/main';
import { BrandManageCreateResourceModal } from '../create/resource/main';
import { BrandManageEditCollectionModal } from '../edit/collection/main';
import { BrandManageEditGalleryModal } from '../edit/gallery/main';
import { BrandManageEditResourceModal } from '../edit/resource/main';

export const ContextForBrandManageModals = createContext({} as Controller);

interface Controller {
  createCollectionController: ContextForOpenableInterface;
  createGalleryController: ContextForOpenableInterface;
  createResourceController: ContextForOpenableInterface;
  editCollectionController: ContextForOpenableInterface;
  editGalleryController: ContextForOpenableInterface;
  editResourceController: ContextForOpenableInterface;
}

export function BrandManageModals({ children }: { children: React.ReactNode }) {
  const createCollectionController = useControllerForOpenable();
  const createGalleryController = useControllerForOpenable();
  const createResourceController = useControllerForOpenable();
  const editCollectionController = useControllerForOpenable();
  const editGalleryController = useControllerForOpenable();
  const editResourceController = useControllerForOpenable();

  return (
    <ContextForBrandManageModals.Provider
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
        <BrandManageCreateCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createGalleryController}>
        <BrandManageCreateGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createResourceController}>
        <BrandManageCreateResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editCollectionController}>
        <BrandManageEditCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editGalleryController}>
        <BrandManageEditGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editResourceController}>
        <BrandManageEditResourceModal />
      </ContextForOpenable.Provider>
      {children}
    </ContextForBrandManageModals.Provider>
  );
}
