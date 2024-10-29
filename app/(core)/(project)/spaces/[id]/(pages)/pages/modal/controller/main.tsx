import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesPagesAddCommentModal } from '../add/comment/main';
import { SpacesPagesAddPostModal } from '../add/post/main';
import { SpacesPagesEditChapterModal } from '../edit/chapter/main';
import { SpacesPagesEditSpaceModal } from '../edit/space/main';
import { SpacesPagesSharePostModal } from '../share/main';

export const ContextForSpacesPagesModals = createContext(
  {} as SpacesPagesModals,
);

export interface SpacesPagesModals {
  addSceneController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesPagesModals({ children }: { children: React.ReactNode }) {
  const addCommentController = useControllerForOpenable();
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();

  return (
    <ContextForSpacesPagesModals.Provider
      value={
        {
          addCommentController,
          shareReviewController,
          addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
        } as SpacesPagesModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={addCommentController}>
        <SpacesPagesAddCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesPagesSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesPagesAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesPagesEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesPagesEditSpaceModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesPagesModals.Provider>
  );
}
