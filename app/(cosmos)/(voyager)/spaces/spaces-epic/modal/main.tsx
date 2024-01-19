import { createContext, useState } from 'react';

export interface SpacesModalsContextObj {
  createSpaceModal: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export const SpacesModalContext = createContext({} as SpacesModalsContextObj);

export const useSpacesModalContext = (): SpacesModalsContextObj => {
  const [showCreateGalleryModal, changeShowCreateGalleryModal] =
    useState(false);

  return {
    createSpaceModal: {
      showModal: showCreateGalleryModal,
      openModal: () => changeShowCreateGalleryModal(true),
      closeModal: () => changeShowCreateGalleryModal(false),
    },
  };
};