import { createContext, useState } from 'react';

export interface CollectionsModalController {
  explorerCreateCollectionModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  draftCreateCollectionModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const CollectionsModalContext = createContext(
  {} as CollectionsModalController,
);

export const useCollectionsModal = (): CollectionsModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    explorerCreateCollectionModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    draftCreateCollectionModal: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
