import { TaskObj } from '@/server/model/task/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesProgressSidebarMode;
  sidebarVisibility: SpacesProgressSidebarVisibility;
  selectedTasks: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesProgressSidebarMode) => void;
  updateSidebarVisibility: (
    visibility: SpacesProgressSidebarVisibility,
  ) => void;
  updateSelectedTasks: (logs: TaskObj[]) => void;
  checkContainsSelectedTask: (log: TaskObj) => boolean;
}

export const ContextForSpacesProgress = createContext({} as Controller);

export enum SpacesProgressDataMode {
  TABLE = 'Table',
  ROWS = 'Rows',
}

export enum SpacesProgressSidebarMode {
  CHAPTERS = 'CHAPTERS',
  NOTES = 'NOTES',
}

export enum SpacesProgressSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesProgress(): Controller {
  const [selectedTasks, setSelectedTasks] = useState<TaskObj[]>([]);
  const [sidebarMode, setSidebarMode] = useState<SpacesProgressSidebarMode>(
    SpacesProgressSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesProgressSidebarVisibility>(
      SpacesProgressSidebarVisibility.OPEN,
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
