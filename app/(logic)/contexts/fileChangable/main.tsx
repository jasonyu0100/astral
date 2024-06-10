import { createContext, useState } from 'react';
import { FileElem } from '../../../(server)/(model)/elements/file/main';

interface ContextForFileChangable {
  fileElem: FileElem;
  onChange: (fileElem: FileElem) => void;
}

export const ContextForFileChangable = createContext(
  {} as ContextForFileChangable,
);

export const useControllerForFileChangable = () => {
  const [fileElem, setFileElem] = useState({} as FileElem);
  return {
    fileElem,
    onChange: (fileElem: FileElem) => setFileElem(fileElem),
  };
};
