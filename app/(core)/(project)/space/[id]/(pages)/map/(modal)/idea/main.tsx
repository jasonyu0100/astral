import { ContextForOpenableInterface } from '@/(logic)/contexts/openable/main';
import { createContext, useState } from 'react';

export interface StarModalController {
  addNoteStarModal: ContextForOpenableInterface;
  addLinkStarModal: ContextForOpenableInterface;
  addFileStarModal: ContextForOpenableInterface;
}

export const StarModalContext = createContext({} as StarModalController);

export const useStarModal = (): StarModalController => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  return {
    addNoteStarModal: {
      opened: one,
      open: () => setOne(true),
      close: () => setOne(false),
    },
    addLinkStarModal: {
      opened: two,
      open: () => setTwo(true),
      close: () => setTwo(false),
    },
    addFileStarModal: {
      opened: three,
      open: () => setThree(true),
      close: () => setThree(false),
    },
  };
};
