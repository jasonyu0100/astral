import { createContext, useState } from 'react';

export interface MapModalController {
  addChapterModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
  addSceneModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const MapModalContext = createContext({} as MapModalController);

export const useMapModal = (): MapModalController => {
  const [showAddChapter, changeShowAddChapter] = useState(false);
  const [showAddScene, changeShowAddScene] = useState(false);

  return {
    addChapterModal: {
      opened: showAddChapter,
      open: () => changeShowAddChapter(true),
      close: () => changeShowAddChapter(false),
    },
    addSceneModal: {
      opened: showAddScene,
      open: () => changeShowAddScene(true),
      close: () => changeShowAddScene(false),
    },
  };
};
