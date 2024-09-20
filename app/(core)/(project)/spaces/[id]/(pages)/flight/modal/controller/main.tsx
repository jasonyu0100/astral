import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesFlightAddCommentModal } from '../add/comment/main';
import { SpacesFlightAddSceneModal } from '../add/scene/main';
import { SpacesFlightAddSpotlightModal } from '../add/spotlight/main';
import { SpacesFlightShareReviewModal } from '../share/main';

export const ContextForSpacesFlightModals = createContext(
  {} as SpacesFlightModals,
);

export interface SpacesFlightModals {
  addSceneController: ContextForOpenableInterface;
  addSpotlightController: ContextForOpenableInterface;
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
  const addSpotlightController = useControllerForOpenable();

  return (
    <ContextForSpacesFlightModals.Provider
      value={
        {
          addSceneController,
          addCommentController,
          shareReviewController,
          addSpotlightController,
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
      <ContextForOpenable.Provider value={addSpotlightController}>
        <SpacesFlightAddSpotlightModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesFlightModals.Provider>
  );
}
