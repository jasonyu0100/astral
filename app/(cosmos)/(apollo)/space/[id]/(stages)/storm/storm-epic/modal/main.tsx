import { createContext, useState } from 'react';

export interface StormModalsContextObj {
  addChapter: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addChat: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const StormModalContext = createContext({} as StormModalsContextObj);

export const useStormModalContext = (): StormModalsContextObj => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    addChapter: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    addChat: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
