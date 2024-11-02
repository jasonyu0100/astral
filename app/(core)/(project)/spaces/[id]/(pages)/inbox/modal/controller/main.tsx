import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceInboxAddChapterModal } from '../add/chapter/main';
import { SpaceInboxAddPostModal } from '../add/post/main';
import { SpaceInboxEditChapterModal } from '../edit/chapter/main';
import { SpaceInboxEditSpaceModal } from '../edit/space/main';
import { SpaceInboxSharePostModal } from '../share/main';

export const ContextForSpaceInboxModals = createContext({} as SpaceInboxModals);

export interface SpaceInboxModals {
  addSceneController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpaceInboxModals({ children }: { children: React.ReactNode }) {
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();

  return (
    <ContextForSpaceInboxModals.Provider
      value={
        {
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          addChapterController: addChapterController,
        } as SpaceInboxModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpaceInboxSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpaceInboxAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpaceInboxEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpaceInboxEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceInboxAddChapterModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceInboxModals.Provider>
  );
}
