import { LogObj } from '@/tables/resource/log/main';
import { createContext, useState } from 'react';

export interface FlowModalController {
  addChapterModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addMomentModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addLoomModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
    loom: LogObj;
    updateLoom: (loomObj: LogObj) => void;
  };
}

export const FlowModalContext = createContext({} as FlowModalController);

export const useFlowModal = (): FlowModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);
  const [showThree, changeShowThree] = useState(false);
  const [loom, changeLoom] = useState({} as LogObj);

  return {
    addChapterModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    addMomentModal: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
    addLoomModal: {
      opened: showThree,
      open: () => changeShowThree(true),
      close: () => changeShowThree(false),
      loom: loom,
      updateLoom: (loomObj: LogObj) => changeLoom(loomObj),
    },
  };
};
