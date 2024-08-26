import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceIdeaAddAttachmentModal } from '../add/attachment/main';
import { SpaceIdeaAddChapterModal } from '../add/chapter/main';
import { SpaceIdeaAddChatModal } from '../add/chat/main';
import { SpaceIdeaCollectModal } from '../collect/main';

export const ContextForSpaceIdeaModals = createContext({} as SpaceIdeaModals);

export interface SpaceIdeaModals {
  addChapterController: ContextForOpenableInterface;
  addChatController: ContextForOpenableInterface;
  addAttachmentController: ContextForOpenableInterface;
  collectController: ContextForOpenableInterface;
}

export function SpaceIdeaModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addChatController = useControllerForOpenable();
  const addAttachmentController = useControllerForOpenable();
  const collectController = useControllerForOpenable();

  return (
    <ContextForSpaceIdeaModals.Provider
      value={{
        addChapterController: addChapterController,
        addChatController: addChatController,
        addAttachmentController: addAttachmentController,
        collectController: collectController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceIdeaAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChatController}>
        <SpaceIdeaAddChatModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addAttachmentController}>
        <SpaceIdeaAddAttachmentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={collectController}>
        <SpaceIdeaCollectModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceIdeaModals.Provider>
  );
}
