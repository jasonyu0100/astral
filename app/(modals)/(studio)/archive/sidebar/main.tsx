import { createContext, useState } from 'react';

export interface ArchiveSidebarController {
  createCollection: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  editGallery: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  createGallery: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  editResource: {
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

export const ArchiveSidebarModalContext = createContext(
  {} as ArchiveSidebarController,
);

export const useArchiveSidebarModal = (): ArchiveSidebarController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);
  const [showThree, changeShowThree] = useState(false);
  const [showFour, changeShowFour] = useState(false);
  const [showFive, changeShowFive] = useState(false);

  return {
    createCollection: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    editGallery: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
    createGallery: {
      opened: showThree,
      open: () => changeShowThree(true),
      close: () => changeShowThree(false),
    },
    editResource: {
      opened: showFour,
      open: () => changeShowFour(true),
      close: () => changeShowFour(false),
    },
    createResource: {
      opened: showFive,
      open: () => changeShowFive(true),
      close: () => changeShowFive(false),
    },
  };
};
