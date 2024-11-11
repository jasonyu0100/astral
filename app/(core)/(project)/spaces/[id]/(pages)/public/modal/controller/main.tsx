import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesPublicAddChapterModal } from '../add/chapter/main';
import { SpacesPublicAddPostModal } from '../add/post/main';
import { SpacesPublicEditChapterModal } from '../edit/chapter/main';
import { SpacesPublicEditPostModal } from '../edit/post/main';
import { SpacesPublicEditSpaceModal } from '../edit/space/main';
import { SpacesPublicSharePostModal } from '../share/main';

export const ContextForSpacesPublicModals = createContext(
  {} as SpacesPublicModals,
);

export interface SpacesPublicModals {
  addPostController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  editPostController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpacesPublicModals({
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
    <ContextForSpacesPublicModals.Provider
      value={
        {
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          editPostController: editPostController,
          addChapterController: addChapterController,
        } as SpacesPublicModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesPublicSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesPublicAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesPublicEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesPublicEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesPublicAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editPostController}>
        <SpacesPublicEditPostModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesPublicModals.Provider>
  );
}
