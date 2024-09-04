import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceChatAddAttachmentModal } from '../add/attachment/main';
import { SpaceChatAddChapterModal } from '../add/chapter/main';
import { SpaceChatAddSceneModal } from '../add/scene/main';
import { SpaceChatGenerateMapModal } from '../generate/main';

export const ContextForSpaceChatModals = createContext({} as SpaceChatModals);

export interface SpaceChatModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addAttachmentController: ContextForOpenableInterface;
  generateSceneController: ContextForOpenableInterface;
}

export function SpaceChatModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addAttachmentController = useControllerForOpenable();
  const generateSceneController = useControllerForOpenable();

  return (
    <ContextForSpaceChatModals.Provider
      value={{
        addChapterController: addChapterController,
        addSceneController: addSceneController,
        addAttachmentController: addAttachmentController,
        generateSceneController: generateSceneController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceChatAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpaceChatAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addAttachmentController}>
        <SpaceChatAddAttachmentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generateSceneController}>
        <SpaceChatGenerateMapModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceChatModals.Provider>
  );
}
