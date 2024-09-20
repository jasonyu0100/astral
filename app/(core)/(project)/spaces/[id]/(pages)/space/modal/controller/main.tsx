import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesSpaceAddAttachmentModal } from '../add/attachment/main';
import { SpacesSpaceAddChapterModal } from '../add/chapter/main';
import { SpacesSpaceSetConstellationModal } from '../constellation/main';

export const ContextForSpacesSpaceModals = createContext(
  {} as SpacesSpaceModals,
);

export interface SpacesSpaceModals {
  addChapterController: ContextForOpenableInterface;
  addAttachmentController: ContextForOpenableInterface;
  generateSceneController: ContextForOpenableInterface;
}

export function SpacesSpaceModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addAttachmentController = useControllerForOpenable();
  const generateSceneController = useControllerForOpenable();

  return (
    <ContextForSpacesSpaceModals.Provider
      value={{
        addChapterController: addChapterController,
        addAttachmentController: addAttachmentController,
        generateSceneController: generateSceneController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesSpaceAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addAttachmentController}>
        <SpacesSpaceAddAttachmentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generateSceneController}>
        <SpacesSpaceSetConstellationModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesSpaceModals.Provider>
  );
}
