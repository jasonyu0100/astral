import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesFlightAddCommentModal } from '../add/comment/main';
import { SpacesFlightAddPostModal } from '../add/post/main';
import { SpacesFlightAddSceneModal } from '../add/scene/main';
import { SpacesFlightShareReviewModal } from '../share/main';

export const ContextForSpacesFlightModals = createContext(
  {} as SpacesFlightModals,
);

export interface SpacesFlightModals {
  addSceneController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
}

export function SpacesFlightModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addSceneController = useControllerForOpenable();
  const addCommentController = useControllerForOpenable();
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();

  return (
    <ContextForSpacesFlightModals.Provider
      value={
        {
          addSceneController,
          addCommentController,
          shareReviewController,
          addPostController,
        } as SpacesFlightModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesFlightAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addCommentController}>
        <SpacesFlightAddCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesFlightShareReviewModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesFlightAddPostModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesFlightModals.Provider>
  );
}
