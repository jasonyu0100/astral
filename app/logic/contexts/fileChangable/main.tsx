import { createContext, useState } from 'react';
import { FileElem } from '../../../(server)/model/elements/file/main';

interface ContextForFileChangableInterface {
  fileElem: FileElem;
  updateFileElem: (fileElem: FileElem) => void;
}

export const ContextForFileChangable = createContext(
  {} as ContextForFileChangableInterface,
);

export const useControllerForFileChangable =
  (): ContextForFileChangableInterface => {
    const [fileElem, setFileElem] = useState({} as FileElem);

    return {
      fileElem,
      updateFileElem: (fileElem: FileElem) => setFileElem(fileElem),
    };
  };
