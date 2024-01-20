import { LoomObj } from '@/tables/resource/loom/main';
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
  addLoom: {
    opened: boolean;
    open: () => void;
    close: () => void;
    loom: LoomObj;
    updateLoom: (loomObj: LoomObj) => void;
  };
}

export const FlowModalContext = createContext({} as FlowModalsContextObj);

export const useFlowModalContext = (): FlowModalsContextObj => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);
  const [showThree, changeShowThree] = useState(false);
  const [loom, changeLoom] = useState({} as LoomObj);

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
    addLoom: {
      opened: showThree,
      open: () => changeShowThree(true),
      close: () => changeShowThree(false),
      loom: loom,
      updateLoom: (loomObj: LoomObj) => changeLoom(loomObj),
    },
  };
};
