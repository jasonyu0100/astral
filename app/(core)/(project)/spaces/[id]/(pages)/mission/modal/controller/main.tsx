import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesMissionAddBacklogTaskModal } from '../add/backlog-task/main';
import { SpacesMissionAddChapterModal } from '../add/chapter/main';
import { SpacesMissionAddTaskModal } from '../add/task/main';
import { SpacesMissionEditChapterModal } from '../edit/chapter/main';
import { SpacesMissionEditSpaceModal } from '../edit/space/main';
import { SpacesMissionGenerateTasksModal } from '../generate/main';

export const ContextForSpacesMissionModals = createContext(
  {} as SpacesMissionModals,
);

export interface SpacesMissionModals {
  addUpdateController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
  addBacklogTaskController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  addGenerateController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesMissionModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addUpdateController = useControllerForOpenable();
  const addTaskController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const addGenerateController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addBacklogTaskController = useControllerForOpenable();

  return (
    <ContextForSpacesMissionModals.Provider
      value={{
        addUpdateController: addUpdateController,
        addTaskController: addTaskController,
        addChapterController: addChapterController,
        addGenerateController: addGenerateController,
        editChapterController: editChapterController,
        editSpaceController: editSpaceController,
        addBacklogTaskController: addBacklogTaskController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addTaskController}>
        <SpacesMissionAddTaskModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesMissionAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateController}>
        <SpacesMissionGenerateTasksModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesMissionEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesMissionEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addBacklogTaskController}>
        <SpacesMissionAddBacklogTaskModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesMissionModals.Provider>
  );
}
