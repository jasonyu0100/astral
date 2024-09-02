import { ChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { createContext, useState } from 'react';

interface Controller {
  selectedLogs: ChapterLogObj[];
  listSceneMode: SpaceJourneySidebarListMode;
  updateSelectedLogs: (logs: ChapterLogObj[]) => void;
  updateListSceneMode: (mode: SpaceJourneySidebarListMode) => void;
  checkContainsSelectedLog: (log: ChapterLogObj) => boolean;
}

export const ContextForSpaceJourney = createContext({} as Controller);

export enum SpaceJourneySidebarListMode {
  LINKS = 'Links',
  SCENES = 'Scenes',
}

export function useControllerForSpaceJourney(): Controller {
  const [selectedLogs, setSelectedLogs] = useState<ChapterLogObj[]>([]);
  const [listSceneMode, setListSceneMode] =
    useState<SpaceJourneySidebarListMode>(SpaceJourneySidebarListMode.LINKS);

  return {
    selectedLogs: selectedLogs,
    listSceneMode: listSceneMode,
    updateSelectedLogs: (logs) => setSelectedLogs(logs),
    updateListSceneMode: (mode) => setListSceneMode(mode),
    checkContainsSelectedLog: (log: ChapterLogObj) =>
      selectedLogs.map((log) => log.id).includes(log.id),
  };
}
