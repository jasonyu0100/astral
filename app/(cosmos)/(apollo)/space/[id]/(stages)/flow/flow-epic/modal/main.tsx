import { createContext, useState } from 'react';

export interface FlowModalsContextObj {
  addChapter: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addMoment: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const FlowModalContext = createContext({} as FlowModalsContextObj);

export const useFlowModalContext = (): FlowModalsContextObj => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    addChapter: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    addMoment: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
