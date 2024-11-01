import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesPreviewAddChapterModal } from '../add/chapter/main';
import { SpacesPreviewAddPostModal } from '../add/post/main';
import { SpacesPreviewEditChapterModal } from '../edit/chapter/main';
import { SpacesPreviewEditSpaceModal } from '../edit/space/main';
import { SpacesPreviewSharePostModal } from '../share/main';

export const ContextForSpacesPreviewModals = createContext(
  {} as SpacesPreviewModals,
);

export interface SpacesPreviewModals {
  addSceneController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpacesPreviewModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();

  return (
    <ContextForSpacesPreviewModals.Provider
      value={
        {
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          addChapterController: addChapterController,
        } as SpacesPreviewModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesPreviewSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesPreviewAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesPreviewEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesPreviewEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesPreviewAddChapterModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesPreviewModals.Provider>
  );
}
