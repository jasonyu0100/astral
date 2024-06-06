import { createContext, useState } from 'react';

export interface DraftModalController {
  addChapterModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addFileMomentModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const DraftModalContext = createContext({} as DraftModalController);

export const useDraftModal = (): DraftModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    addChapterModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    addFileMomentModal: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
