import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesProgressAddBacklogTaskModal } from '../add/backlog-task/main';
import { SpacesProgressAddChapterModal } from '../add/chapter/main';
import { SpacesProgressAddTaskModal } from '../add/task/main';
import { SpacesProgressEditChapterModal } from '../edit/chapter/main';
import { SpacesProgressEditSpaceModal } from '../edit/space/main';
import { SpacesProgressGenerateTasksModal } from '../generate/main';

export const ContextForSpacesProgressModals = createContext(
  {} as SpacesProgressModals,
);

export interface SpacesProgressModals {
  addUpdateController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
  addBacklogTaskController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  addGenerateController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesProgressModals({
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
    <ContextForSpacesProgressModals.Provider
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
        <SpacesProgressAddTaskModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesProgressAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateController}>
        <SpacesProgressGenerateTasksModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesProgressEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesProgressEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addBacklogTaskController}>
        <SpacesProgressAddBacklogTaskModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesProgressModals.Provider>
  );
}
