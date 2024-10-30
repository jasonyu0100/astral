import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesPostAddChapterModal } from '../add/chapter/main';
import { SpacesPostAddCommentModal } from '../add/comment/main';
import { SpacesPostAddPostModal } from '../add/post/main';
import { SpacesPostEditChapterModal } from '../edit/chapter/main';
import { SpacesPostEditSpaceModal } from '../edit/space/main';
import { SpacesPostSharePostModal } from '../share/main';

export const ContextForSpacesPostModals = createContext({} as SpacesPostModals);

export interface SpacesPostModals {
  addSceneController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpacesPostModals({ children }: { children: React.ReactNode }) {
  const addCommentController = useControllerForOpenable();
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();

  return (
    <ContextForSpacesPostModals.Provider
      value={
        {
          addCommentController: addCommentController,
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          addChapterController: addChapterController,
        } as SpacesPostModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={addCommentController}>
        <SpacesPostAddCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesPostSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesPostAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesPostEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesPostEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesPostAddChapterModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesPostModals.Provider>
  );
}
