import { TaskObj } from '@/(server)/model/way/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesJourneySidebarMode;
  sidebarVisibility: SpacesJourneySidebarVisibility;
  dataMode: SpacesJourneyDataMode;
  selectedLogs: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesJourneySidebarMode) => void;
  updateSidebarVisibility: (visibility: SpacesJourneySidebarVisibility) => void;
  updateDataMode: (mode: SpacesJourneyDataMode) => void;
  updateSelectedLogs: (logs: TaskObj[]) => void;
  checkContainsSelectedLog: (log: TaskObj) => boolean;
}

export const ContextForSpacesJourney = createContext({} as Controller);

export enum SpacesJourneyDataMode {
  TABLE = 'Table',
  ROWS = 'Rows',
}

export enum SpacesJourneySidebarMode {
  LINKS = 'LINKS',
  NOTES = 'NOTES',
}

export enum SpacesJourneySidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesJourney(): Controller {
  const [selectedLogs, setSelectedLogs] = useState<TaskObj[]>([]);
  const [dataMode, setDataMode] = useState<SpacesJourneyDataMode>(
    SpacesJourneyDataMode.TABLE,
  );
  const [sidebarMode, setSidebarMode] = useState<SpacesJourneySidebarMode>(
    SpacesJourneySidebarMode.LINKS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesJourneySidebarVisibility>(
      SpacesJourneySidebarVisibility.OPEN,
    );

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
