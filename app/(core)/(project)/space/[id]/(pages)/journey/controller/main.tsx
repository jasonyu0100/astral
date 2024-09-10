import { ChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpaceJourneySidebarMode;
  sidebarVisibility: SpaceJourneySidebarVisibility;
  dataMode: SpaceJourneyDataMode;
  selectedLogs: ChapterLogObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpaceJourneySidebarMode) => void;
  updateSidebarVisibility: (visibility: SpaceJourneySidebarVisibility) => void;
  updateDataMode: (mode: SpaceJourneyDataMode) => void;
  updateSelectedLogs: (logs: ChapterLogObj[]) => void;
  checkContainsSelectedLog: (log: ChapterLogObj) => boolean;
}

export const ContextForSpaceJourney = createContext({} as Controller);

export enum SpaceJourneyDataMode {
  TABLE = 'Table',
  COLUMNS = 'Columns',
}

export enum SpaceJourneySidebarMode {
  IDEAS = 'IDEAS',
  NOTES = 'NOTES',
}

export enum SpaceJourneySidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpaceJourney(): Controller {
  const [selectedLogs, setSelectedLogs] = useState<ChapterLogObj[]>([]);
  const [dataMode, setDataMode] = useState<SpaceJourneyDataMode>(
    SpaceJourneyDataMode.TABLE,
  );
  const [sidebarMode, setSidebarMode] = useState<SpaceJourneySidebarMode>(
    SpaceJourneySidebarMode.IDEAS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpaceJourneySidebarVisibility>(SpaceJourneySidebarVisibility.OPEN);

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
      checkContainsSelectedLog: (log: ChapterLogObj) =>
        selectedLogs.map((log) => log.id).includes(log.id),
    },
  };
}
