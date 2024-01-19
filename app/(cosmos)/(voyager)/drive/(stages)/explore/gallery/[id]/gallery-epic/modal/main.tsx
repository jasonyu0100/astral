import { createContext, useState } from 'react';

export interface GalleryModalsContextObj {
  createCollectionModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const GalleryModalContext = createContext({} as GalleryModalsContextObj);

export const useGalleryModalContext = (): GalleryModalsContextObj => {
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