import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceReviewAddChapterModal } from '../add/chapter/main';
import { SpaceReviewAddChatModal } from '../add/chat/main';
import { SpaceReviewAddCommentModal } from '../add/comment/main';
import { SpaceReviewAddReviewModal } from '../add/review/main';
import { SpaceReviewShareReviewModal } from '../share/main';

export const ContextForSpaceReviewModals = createContext(
  {} as SpaceReviewModals,
);

export interface SpaceReviewModals {
  addChapterController: ContextForOpenableInterface;
  addChatController: ContextForOpenableInterface;
  addReviewController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
}

export function SpaceReviewModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addChatController = useControllerForOpenable();
  const addReviewController = useControllerForOpenable();
  const addCommentController = useControllerForOpenable();
  const shareReviewController = useControllerForOpenable();

  return (
    <ContextForSpaceReviewModals.Provider
      value={
        {
          addChapterController,
          addChatController,
          addReviewController,
          addCommentController,
          shareReviewController,
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
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpaceReviewShareReviewModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceReviewModals.Provider>
  );
}
