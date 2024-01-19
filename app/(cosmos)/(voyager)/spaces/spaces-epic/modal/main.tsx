import { createContext, useState } from 'react';

export interface SpacesModalsContextObj {
  createSpace: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export const SpacesModalContext = createContext({} as SpacesModalsContextObj);

export const useSpacesModalContext = (): SpacesModalsContextObj => {
  const [showOne, changeTwo] =
    useState(false);

  return {
    createSpace: {
      showModal: showOne,
      openModal: () => changeTwo(true),
      closeModal: () => changeTwo(false),
    },
  };
};