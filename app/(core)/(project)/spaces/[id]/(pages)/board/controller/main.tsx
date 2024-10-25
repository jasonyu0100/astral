import { TaskObj } from '@/server/model/task/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesBoardSidebarMode;
  sidebarVisibility: SpacesBoardSidebarVisibility;
  selectedTasks: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesBoardSidebarMode) => void;
  updateSidebarVisibility: (visibility: SpacesBoardSidebarVisibility) => void;
  updateSelectedTasks: (logs: TaskObj[]) => void;
  checkContainsSelectedTask: (log: TaskObj) => boolean;
}

export const ContextForSpacesBoard = createContext({} as Controller);

export enum SpacesBoardDataMode {
  TABLE = 'Table',
  ROWS = 'Rows',
}

export enum SpacesBoardSidebarMode {
  CHAPTERS = 'CHAPTERS',
  NOTES = 'NOTES',
}

export enum SpacesBoardSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesBoard(): Controller {
  const [selectedTasks, setSelectedTasks] = useState<TaskObj[]>([]);
  const [sidebarMode, setSidebarMode] = useState<SpacesBoardSidebarMode>(
    SpacesBoardSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesBoardSidebarVisibility>(SpacesBoardSidebarVisibility.OPEN);

  return {
    state: {
      sidebarMode: sidebarMode,
      sidebarVisibility: sidebarVisibility,
      selectedTasks: selectedTasks,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode) => setSidebarMode(mode),
      updateSelectedTasks: (tasks) => setSelectedTasks(tasks),
      checkContainsSelectedTask: (task: TaskObj) =>
        selectedTasks.map((task) => task.id).includes(task.id),
    },
  };
}
