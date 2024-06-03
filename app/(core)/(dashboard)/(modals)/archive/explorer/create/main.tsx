import { createContext, useState } from 'react';

export interface ArchiveExplorerCreateController {
  createCollection: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  createGallery: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  createResource: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const ArchiveExplorerCreateModalContext = createContext(
  {} as ArchiveExplorerCreateController,
);

export const useArchiveExplorerCreateModal = (): ArchiveExplorerCreateController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);
  const [showThree, changeShowThree] = useState(false);

  return {
    createCollection: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    createGallery: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
    createResource: {
      opened: showThree,
      open: () => changeShowThree(true),
      close: () => changeShowThree(false),
    },
  };
};
