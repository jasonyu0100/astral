import { createContext, useState } from 'react';

export interface HomeModalsContextObj {
  createGallery: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export const HomeModalContext = createContext({} as HomeModalsContextObj);

export const useHomeModalContext = (): HomeModalsContextObj => {
  const [showOne, changeShowTwo] =
    useState(false);

  return {
    createGallery: {
      showModal: showOne,
      openModal: () => changeShowTwo(true),
      closeModal: () => changeShowTwo(false),
    },
  };
};