import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesSpaceAddAttachmentModal } from '../add/attachment/main';
import { SpacesSpaceAddChapterModal } from '../add/chapter/main';
import { SpacesSpaceAddSceneModal } from '../add/scene/main';
import { SpacesSpaceGenerateMapModal } from '../generate/main';

export const ContextForSpacesSpaceModals = createContext(
  {} as SpacesSpaceModals,
);

export interface SpacesSpaceModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addAttachmentController: ContextForOpenableInterface;
  generateSceneController: ContextForOpenableInterface;
}

export function SpacesSpaceModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addAttachmentController = useControllerForOpenable();
  const generateSceneController = useControllerForOpenable();

  return (
    <ContextForSpacesSpaceModals.Provider
      value={{
        addChapterController: addChapterController,
        addSceneController: addSceneController,
        addAttachmentController: addAttachmentController,
        generateSceneController: generateSceneController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesSpaceAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesSpaceAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addAttachmentController}>
        <SpacesSpaceAddAttachmentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generateSceneController}>
        <SpacesSpaceGenerateMapModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesSpaceModals.Provider>
  );
}
