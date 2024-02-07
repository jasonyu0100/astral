import { createContext, useState } from 'react';

export interface CollectionModalController {
  addFileModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const CollectionModalContext = createContext(
  {} as CollectionModalController,
);

export const useCollectionModal = (): CollectionModalController => {
  const [showOne, changeShowOne] = useState(false);

  return {
    addFileModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};
