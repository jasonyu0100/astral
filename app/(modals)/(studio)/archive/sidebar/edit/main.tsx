import { createContext, useState } from 'react';

export interface ArchiveSidebarEditController {
  editGallery: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  editResource: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const ArchiveSidebarEditModalContext = createContext(
  {} as ArchiveSidebarEditController,
);

export const useArchiveSidebarEditModal = (): ArchiveSidebarEditController => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    editGallery: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
    editResource: {
      opened: showTwo,
      open: () => changeShowTwo(true),
      close: () => changeShowTwo(false),
    },
  };
};
