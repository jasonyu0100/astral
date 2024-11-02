import { createContext, useState } from 'react';
import { FileElement } from '../../../architecture/model/elements/file/main';

interface ContextForFileChangableInterface {
  fileElem: FileElement;
  updateFileElem: (fileElem: FileElement) => void;
}

export const ContextForFileChangable = createContext(
  {} as ContextForFileChangableInterface,
);

export const useControllerForFileChangable =
  (): ContextForFileChangableInterface => {
    const [fileElem, setFileElem] = useState({} as FileElement);

    return {
      fileElem,
      updateFileElem: (fileElem: FileElement) => setFileElem(fileElem),
    };
  };
