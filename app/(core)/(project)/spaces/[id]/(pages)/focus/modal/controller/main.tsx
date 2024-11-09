import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesWorkAddArchiveTaskModal } from '../add/archive-task/main';
import { SpacesWorkAddChapterModal } from '../add/chapter/main';
import { SpacesWorkAddTaskModal } from '../add/task/main';
import { SpacesWorkEditChapterModal } from '../edit/chapter/main';
import { SpacesWorkEditSpaceModal } from '../edit/space/main';
import { SpacesWorkGenerateTasksModal } from '../generate/main';

export const ContextForSpacesWorkModals = createContext({} as SpacesWorkModals);

export interface SpacesWorkModals {
  addUpdateController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
  addArchiveTaskController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  addGenerateController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesWorkModals({ children }: { children: React.ReactNode }) {
  const addUpdateController = useControllerForOpenable();
  const addTaskController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const addGenerateController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addArchiveTaskController = useControllerForOpenable();

  return (
    <ContextForSpacesWorkModals.Provider
      value={{
        addUpdateController: addUpdateController,
        addTaskController: addTaskController,
        addChapterController: addChapterController,
        addGenerateController: addGenerateController,
        editChapterController: editChapterController,
        editSpaceController: editSpaceController,
        addArchiveTaskController: addArchiveTaskController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addTaskController}>
        <SpacesWorkAddTaskModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesWorkAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateController}>
        <SpacesWorkGenerateTasksModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesWorkEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesWorkEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addArchiveTaskController}>
        <SpacesWorkAddArchiveTaskModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesWorkModals.Provider>
  );
}
