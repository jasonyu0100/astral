import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesSpaceAddAttachmentModal } from '../add/attachment/main';
import { SpacesSpaceAddChapterModal } from '../add/chapter/main';
import { SpacesSpaceSetConstellationModal } from '../constellation/main';
import { SpacesSpaceEditChapterModal } from '../edit/chapter/main';
import { SpacesSpaceEditSpaceModal } from '../edit/space/main';

export const ContextForSpacesSpaceModals = createContext(
  {} as SpacesSpaceModals,
);

export interface SpacesSpaceModals {
  addChapterController: ContextForOpenableInterface;
  addAttachmentController: ContextForOpenableInterface;
  generateSceneController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesSpaceModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addAttachmentController = useControllerForOpenable();
  const generateSceneController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();

  return (
    <ContextForSpacesSpaceModals.Provider
      value={{
        addChapterController: addChapterController,
        addAttachmentController: addAttachmentController,
        generateSceneController: generateSceneController,
        editChapterController: editChapterController,
        editSpaceController: editSpaceController,
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
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesSpaceEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesSpaceEditSpaceModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesSpaceModals.Provider>
  );
}
