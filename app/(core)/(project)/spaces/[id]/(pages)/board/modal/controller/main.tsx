import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesBoardAddChapterModal } from '../add/chapter/main';
import { SpacesBoardAddFileLinkModal } from '../add/link/file/main';
import { SpacesBoardAddTextLinkModal } from '../add/link/text/main';
import { SpacesBoardAddSceneModal } from '../add/scene/main';
import { SpacesBoardAddTaskModal } from '../add/task/main';
import { SpacesBoardGenerateTasksModal } from '../generate/main';

export const ContextForSpacesBoardModals = createContext(
  {} as SpacesBoardModals,
);

export interface SpacesBoardModals {
  addSceneController: ContextForOpenableInterface;
  addUpdateController: ContextForOpenableInterface;
  addTextLinkController: ContextForOpenableInterface;
  addFileLinkController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  addGenerateController: ContextForOpenableInterface;
}

export function SpacesBoardModals({ children }: { children: React.ReactNode }) {
  const addSceneController = useControllerForOpenable();
  const addUpdateController = useControllerForOpenable();
  const addFileLinkController = useControllerForOpenable();
  const addTextLinkController = useControllerForOpenable();
  const addTaskController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const addGenerateController = useControllerForOpenable();

  return (
    <ContextForSpacesBoardModals.Provider
      value={{
        addSceneController: addSceneController,
        addUpdateController: addUpdateController,
        addFileLinkController: addFileLinkController,
        addTextLinkController: addTextLinkController,
        addTaskController: addTaskController,
        addChapterController: addChapterController,
        addGenerateController: addGenerateController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesBoardAddSceneModal />
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
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesBoardAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateController}>
        <SpacesBoardGenerateTasksModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesBoardModals.Provider>
  );
}
