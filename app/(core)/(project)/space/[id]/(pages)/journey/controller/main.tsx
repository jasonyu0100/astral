import { ChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { createContext, useState } from 'react';

interface Controller {
  selectedLog: ChapterLogObj | null;
  listSceneMode: SpaceJourneySidebarListMode;
  updateSelectedLog: (idea: ChapterLogObj | null) => void;
  updateListSceneMode: (mode: SpaceJourneySidebarListMode) => void;
}

export const ContextForSpaceJourney = createContext({} as Controller);

export enum SpaceJourneySidebarMode {
  MEDIA = 'Media',
  LIST = 'List',
}

export enum SpaceJourneySidebarListMode {
  LINKS = 'LINKS',
  SCENES = 'Scenes',
}

export function useControllerForSpaceJourney(): Controller {
  const [selectedLog, setSelectedLog] = useState<ChapterLogObj | null>(null);
  const [listSceneMode, setListSceneMode] =
    useState<SpaceJourneySidebarListMode>(SpaceJourneySidebarListMode.LINKS);

  return {
    selectedLog: selectedLog,
    listSceneMode: listSceneMode,
    updateSelectedLog: (log) => setSelectedLog(log),
    updateListSceneMode: (mode) => setListSceneMode(mode),
  };
}
