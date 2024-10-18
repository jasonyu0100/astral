import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesBoardAddFileLinkModal } from '../add/link/file/main';
import { SpacesBoardAddTextLinkModal } from '../add/link/text/main';
import { SpacesBoardAddSceneModal } from '../add/scene/main';
import { SpacesBoardAddTaskModal } from '../add/task/main';
import { SpacesBoardPostModal } from '../generate/main';

export const ContextForSpacesBoardModals = createContext(
  {} as SpacesBoardModals,
);

export interface SpacesBoardModals {
  addSceneController: ContextForOpenableInterface;
  addUpdateController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  addTextLinkController: ContextForOpenableInterface;
  addFileLinkController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
}

export function SpacesBoardModals({ children }: { children: React.ReactNode }) {
  const addSceneController = useControllerForOpenable();
  const addUpdateController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const addFileLinkController = useControllerForOpenable();
  const addTextLinkController = useControllerForOpenable();
  const addTaskController = useControllerForOpenable();

  return (
    <ContextForSpacesBoardModals.Provider
      value={{
        addSceneController: addSceneController,
        addUpdateController: addUpdateController,
        addPostController: addPostController,
        addFileLinkController: addFileLinkController,
        addTextLinkController: addTextLinkController,
        addTaskController: addTaskController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesBoardAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesBoardPostModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTextLinkController}>
        <SpacesBoardAddTextLinkModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileLinkController}>
        <SpacesBoardAddFileLinkModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTaskController}>
        <SpacesBoardAddTaskModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesBoardModals.Provider>
  );
}
