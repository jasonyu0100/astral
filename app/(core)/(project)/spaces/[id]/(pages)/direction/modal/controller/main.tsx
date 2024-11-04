import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesDirectionAddBacklogTaskModal } from '../add/backlog-task/main';
import { SpacesDirectionAddChapterModal } from '../add/chapter/main';
import { SpacesDirectionAddTaskModal } from '../add/task/main';
import { SpacesDirectionEditChapterModal } from '../edit/chapter/main';
import { SpacesDirectionEditSpaceModal } from '../edit/space/main';
import { SpacesDirectionGenerateTasksModal } from '../generate/main';

export const ContextForSpacesDirectionModals = createContext(
  {} as SpacesDirectionModals,
);

export interface SpacesDirectionModals {
  addUpdateController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
  addBacklogTaskController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  addGenerateController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesDirectionModals({
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
    <ContextForSpacesDirectionModals.Provider
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
        <SpacesDirectionAddTaskModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesDirectionAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateController}>
        <SpacesDirectionGenerateTasksModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesDirectionEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesDirectionEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addBacklogTaskController}>
        <SpacesDirectionAddBacklogTaskModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesDirectionModals.Provider>
  );
}
