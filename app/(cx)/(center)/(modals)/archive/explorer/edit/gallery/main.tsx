import { createContext, useState } from 'react';

export interface EditGalleryController {
  editGallery: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const EditGalleryModalContext = createContext(
  {} as EditGalleryController,
);

export const useEditGalleryModal = (): EditGalleryController => {
  const [showOne, changeShowOne] = useState(false);

  return {
    editGallery: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};
