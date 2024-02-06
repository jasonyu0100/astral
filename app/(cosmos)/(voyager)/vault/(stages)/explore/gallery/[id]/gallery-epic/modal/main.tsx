import { createContext, useState } from 'react';

export interface GalleryModalsContextObj {
  createCollection: {
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
    createCollection: {
      opened: showCreateGalleryModal,
      open: () => changeShowCreateGalleryModal(true),
      close: () => changeShowCreateGalleryModal(false),
    },
  };
};
