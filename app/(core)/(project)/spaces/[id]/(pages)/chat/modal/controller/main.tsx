import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesChatAddAttachmentModal } from '../add/attachment/main';
import { SpacesChatAddChapterModal } from '../add/chapter/main';
import { SpacesChatConstellationModal } from '../constellation/main';
import { SpacesChatEditChapterModal } from '../edit/chapter/main';
import { SpacesChatEditSpaceModal } from '../edit/space/main';

export const ContextForSpacesChatModals = createContext({} as SpacesChatModals);

export interface SpacesChatModals {
  addChapterController: ContextForOpenableInterface;
  addAttachmentController: ContextForOpenableInterface;
  generateSceneController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesChatModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addAttachmentController = useControllerForOpenable();
  const generateSceneController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();

  return (
    <ContextForSpacesChatModals.Provider
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
        <SpacesChatAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addAttachmentController}>
        <SpacesChatAddAttachmentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generateSceneController}>
        <SpacesChatConstellationModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesChatEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesChatEditSpaceModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesChatModals.Provider>
  );
}
