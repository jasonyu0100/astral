import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceIdeaAddAttachmentModal } from '../add/attachment/main';
import { SpaceIdeaAddChapterModal } from '../add/chapter/main';
import { SpaceIdeaAddSceneModal } from '../add/scene/main';
import { SpaceIdeaGenerateSceneModal } from '../generate/main';

export const ContextForSpaceIdeaModals = createContext({} as SpaceIdeaModals);

export interface SpaceIdeaModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addAttachmentController: ContextForOpenableInterface;
  generateSceneController: ContextForOpenableInterface;
}

export function SpaceIdeaModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addAttachmentController = useControllerForOpenable();
  const generateSceneController = useControllerForOpenable();

  return (
    <ContextForSpaceIdeaModals.Provider
      value={{
        addChapterController: addChapterController,
        addSceneController: addSceneController,
        addAttachmentController: addAttachmentController,
        generateSceneController: generateSceneController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceIdeaAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpaceIdeaAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addAttachmentController}>
        <SpaceIdeaAddAttachmentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generateSceneController}>
        <SpaceIdeaGenerateSceneModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceIdeaModals.Provider>
  );
}
