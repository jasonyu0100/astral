import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceSpotlightAddChapterModal } from '../add/chapter/main';
import { SpaceSpotlightAddCommentModal } from '../add/comment/main';
import { SpaceSpotlightAddSceneModal } from '../add/scene/main';
import { SpaceSpotlightAddSpotlightModal } from '../add/spotlight/main';
import { SpaceSpotlightShareReviewModal } from '../share/main';

export const ContextForSpaceSpotlightModals = createContext(
  {} as SpaceSpotlightModals,
);

export interface SpaceSpotlightModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addSpotlightController: ContextForOpenableInterface;
  addCommentController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
}

export function SpaceSpotlightModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addChapterController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addCommentController = useControllerForOpenable();
  const shareReviewController = useControllerForOpenable();
  const addSpotlightController = useControllerForOpenable();

  return (
    <ContextForSpaceSpotlightModals.Provider
      value={
        {
          addChapterController,
          addSceneController,
          addCommentController,
          shareReviewController,
          addSpotlightController,
        } as SpaceSpotlightModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceSpotlightAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpaceSpotlightAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addCommentController}>
        <SpaceSpotlightAddCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpaceSpotlightShareReviewModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotlightController}>
        <SpaceSpotlightAddSpotlightModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceSpotlightModals.Provider>
  );
}
