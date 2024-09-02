import { ChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  dataMode: SpaceJourneyDataMode;
  selectedLogs: ChapterLogObj[];
}

interface ControllerActions {
  updateDataMode: (mode: SpaceJourneyDataMode) => void;
  updateSelectedLogs: (logs: ChapterLogObj[]) => void;
  checkContainsSelectedLog: (log: ChapterLogObj) => boolean;
}

export const ContextForSpaceJourney = createContext({} as Controller);

export enum SpaceJourneyDataMode {
  TABLE = 'Table',
  COLUMNS = 'Columns',
}

export function useControllerForSpaceJourney(): Controller {
  const [selectedLogs, setSelectedLogs] = useState<ChapterLogObj[]>([]);
  const [dataMode, setDataMode] = useState<SpaceJourneyDataMode>(
    SpaceJourneyDataMode.TABLE,
  );

  return {
    state: {
      selectedLogs: selectedLogs,
      dataMode: dataMode,
    },
    actions: {
      updateDataMode: (mode) => setDataMode(mode),
      updateSelectedLogs: (logs) => setSelectedLogs(logs),
      checkContainsSelectedLog: (log: ChapterLogObj) =>
        selectedLogs.map((log) => log.id).includes(log.id),
    },
  };
}
