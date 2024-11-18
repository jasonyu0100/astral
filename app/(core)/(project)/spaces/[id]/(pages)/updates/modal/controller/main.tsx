import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesPostsAddChapterModal } from '../add/chapter/main';
import { SpacesPostsAddPostModal } from '../add/post/main';
import { SpacesPostsEditChapterModal } from '../edit/chapter/main';
import { SpacesPostsEditPostModal } from '../edit/post/main';
import { SpacesPostsEditSpaceModal } from '../edit/space/main';
import { SpacesPostsSharePostModal } from '../share/main';

export const ContextForSpacesPostsModals = createContext(
  {} as SpacesPostsModals,
);

export interface SpacesPostsModals {
  addPostController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  editPostController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpacesPostsModals({ children }: { children: React.ReactNode }) {
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const editPostController = useControllerForOpenable();

  return (
    <ContextForSpacesPostsModals.Provider
      value={
        {
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          editPostController: editPostController,
          addChapterController: addChapterController,
        } as SpacesPostsModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesPostsSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesPostsAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesPostsEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesPostsEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesPostsAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editPostController}>
        <SpacesPostsEditPostModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesPostsModals.Provider>
  );
}
