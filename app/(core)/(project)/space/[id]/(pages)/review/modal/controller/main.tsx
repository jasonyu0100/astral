import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { createContext } from 'react';
import { SpaceReviewAddChapterModal } from '../add/chapter/main';
import { SpaceReviewAddChatModal } from '../add/chat/main';
import { SpaceReviewAddCommentModal } from '../add/comment/main';
import { SpaceReviewAddReviewModal } from '../add/review/main';
import { SpaceReviewGenerateModal } from '../generate/main';

export const ContextForSpaceReviewModals = createContext(
  {} as SpaceReviewModals,
);

export interface SpaceReviewModals {
  addChapterController: ContextForOpenableInterface;
  addChatController: ContextForOpenableInterface;
  addReviewController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  generateController: ContextForOpenableInterface;
}

export function SpaceReviewModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addChatController = useControllerForOpenable();
  const addReviewController = useControllerForOpenable();
  const addCommentController = useControllerForOpenable();
  const generateController = useControllerForOpenable();

  return (
    <ContextForSpaceReviewModals.Provider
      value={
        {
          addChapterController,
          addChatController,
          addReviewController,
          addCommentController,
          generateController,
        } as SpaceReviewModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceReviewAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChatController}>
        <SpaceReviewAddChatModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addCommentController}>
        <SpaceReviewAddCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addReviewController}>
        <SpaceReviewAddReviewModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generateController}>
        <SpaceReviewGenerateModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceReviewModals.Provider>
  );
}
