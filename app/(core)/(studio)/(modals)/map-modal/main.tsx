import { createContext, useState } from 'react';

export interface MapModalController {
  addChapterModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addPartModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const MapModalContext = createContext({} as MapModalController);

export const useMapModal = (): MapModalController => {
  const [showAddChapter, changeShowAddChapter] = useState(false);
  const [showAddPart, changeShowAddPart] = useState(false);

  return {
    addChapterModal: {
      opened: showAddChapter,
      open: () => changeShowAddChapter(true),
      close: () => changeShowAddChapter(false),
    },
    addPartModal: {
      opened: showAddPart,
      open: () => changeShowAddPart(true),
      close: () => changeShowAddPart(false),
    },
  };
};
