import { createContext, useState } from 'react';

export interface FileContextObj {
  editFile: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const FileModalContext = createContext({} as FileContextObj);

export const useFileModalContext = (): FileContextObj => {
  const [showEditFile, changeShowEditFile] = useState(false);

  return {
    editFile: {
      opened: showEditFile,
      open: () => changeShowEditFile(true),
      close: () => changeShowEditFile(false),
    },
  };
};
