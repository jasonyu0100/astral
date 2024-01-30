import { createContext, useState } from 'react';

export interface HomeModalsContextObj {
  createGallery: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const HomeModalContext = createContext({} as HomeModalsContextObj);

export const useHomeModalContext = (): HomeModalsContextObj => {
  const [showOne, changeShowTwo] =
    useState(false);

  return {
    createGallery: {
      opened: showOne,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};