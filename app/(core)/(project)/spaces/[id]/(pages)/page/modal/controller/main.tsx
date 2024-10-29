import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesPageAddCommentModal } from '../add/comment/main';
import { SpacesPageAddPostModal } from '../add/post/main';
import { SpacesPageEditChapterModal } from '../edit/chapter/main';
import { SpacesPageEditSpaceModal } from '../edit/space/main';
import { SpacesPageSharePostModal } from '../share/main';

export const ContextForSpacesPageModals = createContext({} as SpacesPageModals);

export interface SpacesPageModals {
  addSceneController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesPageModals({ children }: { children: React.ReactNode }) {
  const addCommentController = useControllerForOpenable();
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();

  return (
    <ContextForSpacesPageModals.Provider
      value={
        {
          addCommentController,
          shareReviewController,
          addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
        } as SpacesPageModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={addCommentController}>
        <SpacesPageAddCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesPageSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesPageAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesPageEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesPageEditSpaceModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesPageModals.Provider>
  );
}
