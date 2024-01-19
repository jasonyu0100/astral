import { createContext, useState } from 'react';

export interface HomeModalsContextObj {
  createGalleryModal: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export const HomeModalContext = createContext({} as HomeModalsContextObj);

export const useHomeModalContext = (): HomeModalsContextObj => {
  const [showCreateGalleryModal, changeShowCreateGalleryModal] =
    useState(false);

  return {
    createGalleryModal: {
      showModal: showCreateGalleryModal,
      openModal: () => changeShowCreateGalleryModal(true),
      closeModal: () => changeShowCreateGalleryModal(false),
    },
  };
};