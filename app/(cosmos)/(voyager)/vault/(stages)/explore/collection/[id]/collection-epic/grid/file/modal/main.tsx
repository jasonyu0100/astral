import { createContext, useState } from 'react';

export interface FileModalController {
  editFileModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const FileModalContext = createContext({} as FileModalController);

export const useFileModal = (): FileModalController => {
  const [showEditFile, changeShowEditFile] = useState(false);

  return {
    editFileModal: {
      opened: showEditFile,
      open: () => changeShowEditFile(true),
      close: () => changeShowEditFile(false),
    },
  };
};
