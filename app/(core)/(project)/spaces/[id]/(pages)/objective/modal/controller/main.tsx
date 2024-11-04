import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesObjectiveAddBacklogTaskModal } from '../add/backlog-task/main';
import { SpacesObjectiveAddChapterModal } from '../add/chapter/main';
import { SpacesObjectiveAddTaskModal } from '../add/task/main';
import { SpacesObjectiveEditChapterModal } from '../edit/chapter/main';
import { SpacesObjectiveEditSpaceModal } from '../edit/space/main';
import { SpacesObjectiveGenerateTasksModal } from '../generate/main';

export const ContextForSpacesObjectiveModals = createContext(
  {} as SpacesObjectiveModals,
);

export interface SpacesObjectiveModals {
  addUpdateController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
  addBacklogTaskController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  addGenerateController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesObjectiveModals({
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
    <ContextForSpacesObjectiveModals.Provider
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
        <SpacesObjectiveAddTaskModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesObjectiveAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateController}>
        <SpacesObjectiveGenerateTasksModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesObjectiveEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesObjectiveEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addBacklogTaskController}>
        <SpacesObjectiveAddBacklogTaskModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesObjectiveModals.Provider>
  );
}
