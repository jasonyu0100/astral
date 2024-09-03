import { ChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpaceJourneySidebarMode;
  dataMode: SpaceJourneyDataMode;
  selectedLogs: ChapterLogObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: any) => void;
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

export function useControllerForSpaceJourney(): Controller {
  const [selectedLogs, setSelectedLogs] = useState<ChapterLogObj[]>([]);
  const [dataMode, setDataMode] = useState<SpaceJourneyDataMode>(
    SpaceJourneyDataMode.TABLE,
  );
  const [sidebarMode, setSidebarMode] = useState<SpaceJourneySidebarMode>(
    SpaceJourneySidebarMode.IDEAS,
  );

  return {
    state: {
      sidebarMode: sidebarMode,
      selectedLogs: selectedLogs,
      dataMode: dataMode,
    },
    actions: {
      updateSidebarMode: (mode) => setSidebarMode(mode),
      updateDataMode: (mode) => setDataMode(mode),
      updateSelectedLogs: (logs) => setSelectedLogs(logs),
      checkContainsSelectedLog: (log: ChapterLogObj) =>
        selectedLogs.map((log) => log.id).includes(log.id),
    },
  };
}
