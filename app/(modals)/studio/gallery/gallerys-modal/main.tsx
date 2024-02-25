import { createContext, useState } from 'react';

export interface GallerysModalController {
  explorerCreateGalleryModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  draftCreateGalleryModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const GallerysModalContext = createContext({} as GallerysModalController);

export const useGallerysModal = (): GallerysModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    explorerCreateGalleryModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    draftCreateGalleryModal: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
