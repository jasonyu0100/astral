import { createContext, useState } from 'react';

export interface GalleryModalController {
  editGalleryModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const GalleryModalContext = createContext({} as GalleryModalController);

export const useGalleryModal = (): GalleryModalController => {
  const [showOne, changeShowOne] = useState(false);

  return {
    editGalleryModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};
