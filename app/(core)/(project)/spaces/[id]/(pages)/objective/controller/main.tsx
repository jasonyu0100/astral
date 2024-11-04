import { TaskObj } from '@/architecture/model/task/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesObjectiveSidebarMode;
  sidebarVisibility: SpacesObjectiveSidebarVisibility;
  selectedTasks: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesObjectiveSidebarMode) => void;
  updateSidebarVisibility: (
    visibility: SpacesObjectiveSidebarVisibility,
  ) => void;
  updateSelectedTasks: (logs: TaskObj[]) => void;
  checkContainsSelectedTask: (log: TaskObj) => boolean;
}

export const ContextForSpacesObjective = createContext({} as Controller);

export enum SpacesObjectiveDataMode {
  TABLE = 'Table',
  ROWS = 'Rows',
}

export enum SpacesObjectiveSidebarMode {
  CHAPTERS = 'CHAPTERS',
  BACKLOG = 'BACKLOG',
}

export enum SpacesObjectiveSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesObjective(): Controller {
  const [selectedTasks, setSelectedTasks] = useState<TaskObj[]>([]);
  const [sidebarMode, setSidebarMode] = useState<SpacesObjectiveSidebarMode>(
    SpacesObjectiveSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesObjectiveSidebarVisibility>(
      SpacesObjectiveSidebarVisibility.OPEN,
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
