import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesConversationAddAttachmentModal } from '../add/attachment/main';
import { SpacesConversationAddChapterModal } from '../add/chapter/main';
import { SpacesConversationConstellationModal } from '../constellation/main';
import { SpacesConversationEditChapterModal } from '../edit/chapter/main';
import { SpacesConversationEditSpaceModal } from '../edit/space/main';

export const ContextForSpacesConversationModals = createContext(
  {} as SpacesConversationModals,
);

export interface SpacesConversationModals {
  addChapterController: ContextForOpenableInterface;
  addAttachmentController: ContextForOpenableInterface;
  generateSceneController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesConversationModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addChapterController = useControllerForOpenable();
  const addAttachmentController = useControllerForOpenable();
  const generateSceneController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();

  return (
    <ContextForSpacesConversationModals.Provider
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
        <SpacesConversationAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addAttachmentController}>
        <SpacesConversationAddAttachmentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generateSceneController}>
        <SpacesConversationConstellationModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesConversationEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesConversationEditSpaceModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesConversationModals.Provider>
  );
}
