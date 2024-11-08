import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesLiveAddChapterModal } from '../add/chapter/main';
import { SpacesLiveAddPostModal } from '../add/post/main';
import { SpacesLiveEditChapterModal } from '../edit/chapter/main';
import { SpacesLiveEditPostModal } from '../edit/post/main';
import { SpacesLiveEditSpaceModal } from '../edit/space/main';
import { SpacesLiveSharePostModal } from '../share/main';

export const ContextForSpacesLiveModals = createContext({} as SpacesLiveModals);

export interface SpacesLiveModals {
  addPostController: ContextForOpenableInterface;
  shareReviewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  editPostController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
}

export function SpacesLiveModals({ children }: { children: React.ReactNode }) {
  const shareReviewController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const editPostController = useControllerForOpenable();

  return (
    <ContextForSpacesLiveModals.Provider
      value={
        {
          shareReviewController: shareReviewController,
          addPostController: addPostController,
          editChapterController: editChapterController,
          editSpaceController: editSpaceController,
          editPostController: editPostController,
          addChapterController: addChapterController,
        } as SpacesLiveModals
      }
    >
      {children}
      <ContextForOpenable.Provider value={shareReviewController}>
        <SpacesLiveSharePostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesLiveAddPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesLiveEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesLiveEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesLiveAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editPostController}>
        <SpacesLiveEditPostModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesLiveModals.Provider>
  );
}
