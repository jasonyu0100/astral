import { createContext, useState } from 'react';

export interface HomeModalController {
  createGalleryModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const HomeModalContext = createContext({} as HomeModalController);

export const useHomeModal = (): HomeModalController => {
  const [showOne, changeShowTwo] = useState(false);

  return {
    createGalleryModal: {
      opened: showOne,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
