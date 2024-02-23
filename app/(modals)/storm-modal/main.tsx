import { createContext, useState } from 'react';

export interface StormModalController {
  addChapterModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addChatModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const StormModalContext = createContext({} as StormModalController);

export const useStormModal = (): StormModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    addChapterModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    addChatModal: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
