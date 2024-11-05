import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesTableAddChapterModal } from '../add/chapter/main';
import { SpacesTableAddPostModal } from '../add/post/main';
import { SpacesTableEditChapterModal } from '../edit/chapter/main';
import { SpacesTableEditPostModal } from '../edit/post/main';
import { SpacesTableEditSpaceModal } from '../edit/space/main';
import { SpacesTableSharePostModal } from '../share/main';

export const ContextForSpacesTableModals = createContext(
  {} as SpacesTableModals,
);

export interface SpacesTableModals {
  addPostController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  editPostController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpacesTableModals({ children }: { children: React.ReactNode }) {
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const editPostController = useControllerForOpenable();

  return (
    <ContextForSpacesTableModals.Provider
      value={
        {
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          editPostController: editPostController,
          addChapterController: addChapterController,
        } as SpacesTableModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesTableSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesTableAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesTableEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesTableEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesTableAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editPostController}>
        <SpacesTableEditPostModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesTableModals.Provider>
  );
}
