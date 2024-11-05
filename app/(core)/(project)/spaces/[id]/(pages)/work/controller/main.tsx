import { TaskObj } from '@/architecture/model/task/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesWorkSidebarMode;
  sidebarVisibility: SpacesWorkSidebarVisibility;
  selectedTasks: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesWorkSidebarMode) => void;
  updateSidebarVisibility: (visibility: SpacesWorkSidebarVisibility) => void;
  updateSelectedTasks: (logs: TaskObj[]) => void;
  checkContainsSelectedTask: (log: TaskObj) => boolean;
}

export const ContextForSpacesWork = createContext({} as Controller);

export enum SpacesWorkDataMode {
  TABLE = 'Table',
  ROWS = 'Rows',
}

export enum SpacesWorkSidebarMode {
  CHAPTERS = 'CHAPTERS',
  BACKLOG = 'BACKLOG',
}

export enum SpacesWorkSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesWork(): Controller {
  const [selectedTasks, setSelectedTasks] = useState<TaskObj[]>([]);
  const [sidebarMode, setSidebarMode] = useState<SpacesWorkSidebarMode>(
    SpacesWorkSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesWorkSidebarVisibility>(SpacesWorkSidebarVisibility.OPEN);

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
