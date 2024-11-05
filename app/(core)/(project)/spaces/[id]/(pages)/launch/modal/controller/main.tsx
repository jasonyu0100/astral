import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesLaunchAddChapterModal } from '../add/chapter/main';
import { SpacesLaunchAddPostModal } from '../add/post/main';
import { SpacesLaunchEditChapterModal } from '../edit/chapter/main';
import { SpacesLaunchEditPostModal } from '../edit/post/main';
import { SpacesLaunchEditSpaceModal } from '../edit/space/main';
import { SpacesLaunchSharePostModal } from '../share/main';

export const ContextForSpacesLaunchModals = createContext(
  {} as SpacesLaunchModals,
);

export interface SpacesLaunchModals {
  addPostController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  editPostController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpacesLaunchModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const editPostController = useControllerForOpenable();

  return (
    <ContextForSpacesLaunchModals.Provider
      value={
        {
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          editPostController: editPostController,
          addChapterController: addChapterController,
        } as SpacesLaunchModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesLaunchSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesLaunchAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesLaunchEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesLaunchEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesLaunchAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editPostController}>
        <SpacesLaunchEditPostModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesLaunchModals.Provider>
  );
}
