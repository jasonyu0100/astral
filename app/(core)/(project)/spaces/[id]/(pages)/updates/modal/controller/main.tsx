import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesUpdatesAddChapterModal } from '../add/chapter/main';
import { SpacesUpdatesAddPostModal } from '../add/post/main';
import { SpacesUpdatesEditChapterModal } from '../edit/chapter/main';
import { SpacesUpdatesEditPostModal } from '../edit/post/main';
import { SpacesUpdatesEditSpaceModal } from '../edit/space/main';
import { SpacesUpdatesSharePostModal } from '../share/main';

export const ContextForSpacesUpdatesModals = createContext(
  {} as SpacesUpdatesModals,
);

export interface SpacesUpdatesModals {
  addPostController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  editPostController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpacesUpdatesModals({
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
    <ContextForSpacesUpdatesModals.Provider
      value={
        {
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          editPostController: editPostController,
          addChapterController: addChapterController,
        } as SpacesUpdatesModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesUpdatesSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesUpdatesAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesUpdatesEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesUpdatesEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesUpdatesAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editPostController}>
        <SpacesUpdatesEditPostModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesUpdatesModals.Provider>
  );
}
