import { LogObj } from '@/(model)/media/resource/log/main';
import { createContext, useState } from 'react';

export interface StarModalController {
  addNoteStarModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addLogStarModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
    logObj: LogObj;
    updateLogObj: (logObj: LogObj) => void;
  };
  addLinkStarModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addFileStarModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const StarModalContext = createContext({} as StarModalController);

export const useStarModal = (): StarModalController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);
  const [showThree, changeShowThree] = useState(false);
  const [showFour, changeShowFour] = useState(false);
  const [logObj, changeLogObj] = useState({} as LogObj);

  return {
    addNoteStarModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    addLogStarModal: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
      logObj: logObj,
      updateLogObj: (logObj: LogObj) => changeLogObj(logObj),
    },
    addLinkStarModal: {
      opened: showThree,
      open: () => changeShowThree(true),
      close: () => changeShowThree(false),
    },
    addFileStarModal: {
      opened: showFour,
      open: () => changeShowFour(true),
      close: () => changeShowFour(false),
    },
  };
};
