import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesPostAddCommentModal } from '../add/comment/main';
import { SpacesPostAddPostModal } from '../add/post/main';
import { SpacesPostAddSceneModal } from '../add/scene/main';
import { SpacesPostShareReviewModal } from '../share/main';

export const ContextForSpacesPostModals = createContext({} as SpacesPostModals);

export interface SpacesPostModals {
  addSceneController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
}

export function SpacesPostModals({ children }: { children: React.ReactNode }) {
  const addSceneController = useControllerForOpenable();
  const addCommentController = useControllerForOpenable();
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();

  return (
    <ContextForSpacesPostModals.Provider
      value={
        {
          addSceneController,
          addCommentController,
          shareReviewController,
          addPostController,
        } as SpacesPostModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesPostAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addCommentController}>
        <SpacesPostAddCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesPostShareReviewModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesPostAddPostModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesPostModals.Provider>
  );
}
