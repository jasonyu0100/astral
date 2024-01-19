import { createContext, useState } from 'react';

export interface CollectionModalsContextObj {
  addFileModal: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export const CollectionModalContext = createContext({} as CollectionModalsContextObj);

export const useCollectionModalContext = (): CollectionModalsContextObj => {
  const [showCreateGalleryModal, changeShowCreateGalleryModal] =
    useState(false);

  return {
    addFileModal: {
      showModal: showCreateGalleryModal,
      openModal: () => changeShowCreateGalleryModal(true),
      closeModal: () => changeShowCreateGalleryModal(false),
    },
  };
};