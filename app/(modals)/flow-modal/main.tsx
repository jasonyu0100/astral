import { LogObj } from '@/(logic)/model/resource/log/main';
import { createContext, useState } from 'react';

export interface FlowModalController {
  addChapterModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addFileMomentModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addLogMomentModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
    log: LogObj;
    updateLogObj: (logObj: LogObj) => void;
  };
}

export const FlowModalContext = createContext({} as FlowModalController);

export const useFlowModal = (): FlowModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);
  const [showThree, changeShowThree] = useState(false);
  const [log, changeLog] = useState({} as LogObj);

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
    addLogMomentModal: {
      opened: showThree,
      open: () => changeShowThree(true),
      close: () => changeShowThree(false),
      log: log,
      updateLogObj: (logObj: LogObj) => changeLog(logObj),
    },
  };
};
