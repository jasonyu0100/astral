import { ContextForOpenableInterface } from '@/(logic)/contexts/openable/main';
import { createContext, useState } from 'react';

export interface SpaceFlowModalController {
  addChapterModal: ContextForOpenableInterface;
  addFileMomentModal: ContextForOpenableInterface;
}

export const SpaceFlowModalContext = createContext(
  {} as SpaceFlowModalController,
);

export const useSpaceFlowModal = (): SpaceFlowModalController => {
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
