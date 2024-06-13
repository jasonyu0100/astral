import { ContextForOpenableInterface } from '@/(logic)/contexts/openable/main';
import { createContext, useState } from 'react';

export interface VerseModalController {
  addChapterModal: ContextForOpenableInterface;
  addFileMomentModal: ContextForOpenableInterface;
}

export const VerseModalContext = createContext({} as VerseModalController);

export const useVerseModal = (): VerseModalController => {
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
