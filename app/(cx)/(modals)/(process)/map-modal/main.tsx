import { createContext, useState } from 'react';

export interface MapModalController {
  addChapterModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addConstellationModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const MapModalContext = createContext({} as MapModalController);

export const useMapModal = (): MapModalController => {
  const [showAddChapter, changeShowAddChapter] = useState(false);
  const [showAddConstellation, changeShowAddConstellation] = useState(false);

  return {
    addChapterModal: {
      opened: showAddChapter,
      open: () => changeShowAddChapter(true),
      close: () => changeShowAddChapter(false),
    },
    addConstellationModal: {
      opened: showAddConstellation,
      open: () => changeShowAddConstellation(true),
      close: () => changeShowAddConstellation(false),
    },
  };
};
