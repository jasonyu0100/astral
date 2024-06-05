import { LogObj } from '@/(model)/concept/log/main';
import { createContext, useState } from 'react';

export interface DraftModalController {
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

export const DraftModalContext = createContext({} as DraftModalController);

export const useDraftModal = (): DraftModalController => {
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
