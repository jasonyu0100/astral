import { ContextForOpenableInterface } from '@/(logic)/contexts/openable/main';
import { createContext, useState } from 'react';

export interface DraftModalController {
  addChapterModal: ContextForOpenableInterface;
  addFileMomentModal: ContextForOpenableInterface;
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
