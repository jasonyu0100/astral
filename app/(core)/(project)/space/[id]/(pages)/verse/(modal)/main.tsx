import { ContextForOpenableInterface } from '@/(logic)/contexts/openable/main';
import { createContext, useState } from 'react';

export interface SpaceVerseModalController {
  addChapterModal: ContextForOpenableInterface;
  addFileMomentModal: ContextForOpenableInterface;
}

export const SpaceVerseModalContext = createContext(
  {} as SpaceVerseModalController,
);

export const useSpaceVerseModal = (): SpaceVerseModalController => {
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
