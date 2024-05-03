import { createContext, useState } from 'react';

export interface ArchiveSidebarCreateController {
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

export const ArchiveSidebarCreateModalContext = createContext(
  {} as ArchiveSidebarCreateController,
);

export const useArchiveSidebarCreateModal = (): ArchiveSidebarCreateController => {
  const [showOne, changeShowOne] = useState(false);
  const [showThree, changeShowThree] = useState(false);
  const [showFive, changeShowFive] = useState(false);

  return {
    createCollection: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    createGallery: {
      opened: showThree,
      open: () => changeShowThree(true),
      close: () => changeShowThree(false),
    },
    createResource: {
      opened: showFive,
      open: () => changeShowFive(true),
      close: () => changeShowFive(false),
    },
  };
};
