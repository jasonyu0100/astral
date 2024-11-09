import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesFocusAddArchiveTaskModal } from '../add/archive-task/main';
import { SpacesFocusAddChapterModal } from '../add/chapter/main';
import { SpacesFocusAddTaskModal } from '../add/task/main';
import { SpacesFocusEditChapterModal } from '../edit/chapter/main';
import { SpacesFocusEditSpaceModal } from '../edit/space/main';
import { SpacesFocusGenerateTasksModal } from '../generate/main';

export const ContextForSpacesFocusModals = createContext(
  {} as SpacesFocusModals,
);

export interface SpacesFocusModals {
  addUpdateController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
  addArchiveTaskController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  addGenerateController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesFocusModals({ children }: { children: React.ReactNode }) {
  const addUpdateController = useControllerForOpenable();
  const addTaskController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const addGenerateController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const addArchiveTaskController = useControllerForOpenable();

  return (
    <ContextForSpacesFocusModals.Provider
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
        <SpacesFocusAddTaskModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesFocusAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateController}>
        <SpacesFocusGenerateTasksModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesFocusEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesFocusEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addArchiveTaskController}>
        <SpacesFocusAddArchiveTaskModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesFocusModals.Provider>
  );
}
