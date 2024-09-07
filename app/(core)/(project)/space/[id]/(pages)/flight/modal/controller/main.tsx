import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceFlightAddChapterModal } from '../add/chapter/main';
import { SpaceFlightAddCommentModal } from '../add/comment/main';
import { SpaceFlightAddSceneModal } from '../add/scene/main';
import { SpaceFlightAddSpotlightModal } from '../add/spotlight/main';
import { SpaceFlightShareReviewModal } from '../share/main';

export const ContextForSpaceFlightModals = createContext(
  {} as SpaceFlightModals,
);

export interface SpaceFlightModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addSpotlightController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
}

export function SpaceFlightModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addCommentController = useControllerForOpenable();
  const shareReviewController = useControllerForOpenable();
  const addSpotlightController = useControllerForOpenable();

  return (
    <ContextForSpaceFlightModals.Provider
      value={
        {
          addChapterController,
          addSceneController,
          addCommentController,
          shareReviewController,
          addSpotlightController,
        } as SpaceFlightModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceFlightAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpaceFlightAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addCommentController}>
        <SpaceFlightAddCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpaceFlightShareReviewModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotlightController}>
        <SpaceFlightAddSpotlightModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceFlightModals.Provider>
  );
}
