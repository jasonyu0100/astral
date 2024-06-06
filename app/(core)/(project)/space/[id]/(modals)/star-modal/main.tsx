import { createContext, useState } from 'react';

export interface StarModalController {
  addNoteStarModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addLinkStarModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addFileStarModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const StarModalContext = createContext({} as StarModalController);

export const useStarModal = (): StarModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showThree, changeShowThree] = useState(false);
  const [showFour, changeShowFour] = useState(false);

  return {
    addNoteStarModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    addLinkStarModal: {
      opened: showThree,
      open: () => changeShowThree(true),
      close: () => changeShowThree(false),
    },
    addFileStarModal: {
      opened: showFour,
      open: () => changeShowFour(true),
      close: () => changeShowFour(false),
    },
  };
};
