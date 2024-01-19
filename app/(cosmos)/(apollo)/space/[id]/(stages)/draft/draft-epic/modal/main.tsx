import { createContext, useState } from 'react';

export interface DraftModalsContextObj {
  addChapter: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addConstellation: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const DraftModalContext = createContext({} as DraftModalsContextObj);

export const useDraftModalContext = (): DraftModalsContextObj => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    addChapter: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    addConstellation: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};

