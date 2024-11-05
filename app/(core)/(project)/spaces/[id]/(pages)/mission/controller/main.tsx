import { TaskObj } from '@/architecture/model/task/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesMissionSidebarMode;
  sidebarVisibility: SpacesMissionSidebarVisibility;
  selectedTasks: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesMissionSidebarMode) => void;
  updateSidebarVisibility: (visibility: SpacesMissionSidebarVisibility) => void;
  updateSelectedTasks: (logs: TaskObj[]) => void;
  checkContainsSelectedTask: (log: TaskObj) => boolean;
}

export const ContextForSpacesMission = createContext({} as Controller);

export enum SpacesMissionDataMode {
  TABLE = 'Table',
  ROWS = 'Rows',
}

export enum SpacesMissionSidebarMode {
  CHAPTERS = 'CHAPTERS',
  BACKLOG = 'BACKLOG',
}

export enum SpacesMissionSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesMission(): Controller {
  const [selectedTasks, setSelectedTasks] = useState<TaskObj[]>([]);
  const [sidebarMode, setSidebarMode] = useState<SpacesMissionSidebarMode>(
    SpacesMissionSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesMissionSidebarVisibility>(
      SpacesMissionSidebarVisibility.OPEN,
    );

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
