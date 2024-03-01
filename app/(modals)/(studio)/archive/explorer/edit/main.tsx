import { createContext, useState } from 'react';

export interface ArchiveExplorerEditController {
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

export const ArchiveExplorerEditModalContext = createContext(
  {} as ArchiveExplorerEditController,
);

export const useArchiveExplorerEditModal = (): ArchiveExplorerEditController => {
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
