import { createContext, useState } from 'react';

export interface GalleryModalsContextObj {
  createCollectionModal: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export const GalleryModalContext = createContext({} as GalleryModalsContextObj);

export const useGalleryModalContext = (): GalleryModalsContextObj => {
  const [showCreateGalleryModal, changeShowCreateGalleryModal] =
    useState(false);

  return {
    createCollectionModal: {
      showModal: showCreateGalleryModal,
      openModal: () => changeShowCreateGalleryModal(true),
      closeModal: () => changeShowCreateGalleryModal(false),
    },
  };
};