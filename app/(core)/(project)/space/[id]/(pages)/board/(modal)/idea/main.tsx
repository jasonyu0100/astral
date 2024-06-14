import { ContextForOpenableInterface } from '@/(logic)/contexts/openable/main';
import { createContext, useState } from 'react';

export interface SceneIdeaModalController {
  addNoteStarModal: ContextForOpenableInterface;
  addLinkStarModal: ContextForOpenableInterface;
  addFileStarModal: ContextForOpenableInterface;
}

export const SceneIdeaModalContext = createContext(
  {} as SceneIdeaModalController,
);

export const useSceneIdeaModal = (): SceneIdeaModalController => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  return {
    addNoteStarModal: {
      opened: one,
      open: () => setOne(true),
      close: () => setOne(false),
    },
    addLinkStarModal: {
      opened: two,
      open: () => setTwo(true),
      close: () => setTwo(false),
    },
    addFileStarModal: {
      opened: three,
      open: () => setThree(true),
      close: () => setThree(false),
    },
  };
};
