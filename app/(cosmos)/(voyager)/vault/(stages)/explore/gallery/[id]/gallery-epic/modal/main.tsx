import { createContext, useState } from 'react';

export interface GalleryModalController {
  createCollectionModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const GalleryModalContext = createContext({} as GalleryModalController);

export const useGalleryModal = (): GalleryModalController => {
  const [showCreateGalleryModal, changeShowCreateGalleryModal] =
    useState(false);

  return {
    createCollectionModal: {
      opened: showCreateGalleryModal,
      open: () => changeShowCreateGalleryModal(true),
      close: () => changeShowCreateGalleryModal(false),
    },
  };
};
