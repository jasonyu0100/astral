import { TaskObj } from '@/(server)/model/way/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesBoardSidebarMode;
  sidebarVisibility: SpacesBoardSidebarVisibility;
  dataMode: SpacesBoardDataMode;
  selectedLogs: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesBoardSidebarMode) => void;
  updateSidebarVisibility: (visibility: SpacesBoardSidebarVisibility) => void;
  updateDataMode: (mode: SpacesBoardDataMode) => void;
  updateSelectedLogs: (logs: TaskObj[]) => void;
  checkContainsSelectedLog: (log: TaskObj) => boolean;
}

export const ContextForSpacesBoard = createContext({} as Controller);

export enum SpacesBoardDataMode {
  TABLE = 'Table',
  ROWS = 'Rows',
}

export enum SpacesBoardSidebarMode {
  LINKS = 'LINKS',
  NOTES = 'NOTES',
}

export enum SpacesBoardSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesBoard(): Controller {
  const [selectedLogs, setSelectedLogs] = useState<TaskObj[]>([]);
  const [dataMode, setDataMode] = useState<SpacesBoardDataMode>(
    SpacesBoardDataMode.TABLE,
  );
  const [sidebarMode, setSidebarMode] = useState<SpacesBoardSidebarMode>(
    SpacesBoardSidebarMode.LINKS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesBoardSidebarVisibility>(SpacesBoardSidebarVisibility.OPEN);

  return {
    state: {
      sidebarMode: sidebarMode,
      sidebarVisibility: sidebarVisibility,
      selectedLogs: selectedLogs,
      dataMode: dataMode,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode) => setSidebarMode(mode),
      updateDataMode: (mode) => setDataMode(mode),
      updateSelectedLogs: (logs) => setSelectedLogs(logs),
      checkContainsSelectedLog: (log: TaskObj) =>
        selectedLogs.map((log) => log.id).includes(log.id),
    },
  };
}
