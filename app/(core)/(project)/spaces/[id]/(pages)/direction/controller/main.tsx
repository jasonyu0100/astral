import { TaskObj } from '@/architecture/model/task/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesDirectionSidebarMode;
  sidebarVisibility: SpacesDirectionSidebarVisibility;
  selectedTasks: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesDirectionSidebarMode) => void;
  updateSidebarVisibility: (
    visibility: SpacesDirectionSidebarVisibility,
  ) => void;
  updateSelectedTasks: (logs: TaskObj[]) => void;
  checkContainsSelectedTask: (log: TaskObj) => boolean;
}

export const ContextForSpacesDirection = createContext({} as Controller);

export enum SpacesDirectionDataMode {
  TABLE = 'Table',
  ROWS = 'Rows',
}

export enum SpacesDirectionSidebarMode {
  CHAPTERS = 'CHAPTERS',
  BACKLOG = 'BACKLOG',
}

export enum SpacesDirectionSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesDirection(): Controller {
  const [selectedTasks, setSelectedTasks] = useState<TaskObj[]>([]);
  const [sidebarMode, setSidebarMode] = useState<SpacesDirectionSidebarMode>(
    SpacesDirectionSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesDirectionSidebarVisibility>(
      SpacesDirectionSidebarVisibility.OPEN,
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
