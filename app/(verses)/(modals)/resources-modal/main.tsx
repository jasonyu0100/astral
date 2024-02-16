import { createContext, useState } from 'react';

export interface ResourcesModalController {
  explorerAddResourceModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  draftAddResourceModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const ResourcesModalContext = createContext(
  {} as ResourcesModalController,
);

export const useResourceModal = (): ResourcesModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    explorerAddResourceModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    draftAddResourceModal: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
