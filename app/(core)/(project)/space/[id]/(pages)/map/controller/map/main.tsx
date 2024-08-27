import { SceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { createContext, useState } from 'react';

interface Controller {
  selectedIdea: SceneIdeaObj | null;
  ideaMode: SpaceMapIdeaMode;
  mapMode: SpaceMapInteractionMode;
  sidebarMode: SpaceMapSidebarMode;
  listSceneMode: SpaceMapSidebarListMode;
  peopleMode: SpaceMapPeopleMode;
  updatePeopleMode: (mode: SpaceMapPeopleMode) => void;
  updateSelectedIdea: (idea: SceneIdeaObj | null) => void;
  updateIdeaMode: (mode: SpaceMapIdeaMode) => void;
  updateMapMode: (mode: SpaceMapInteractionMode) => void;
  updateSidebarMode: (mode: SpaceMapSidebarMode) => void;
  updateListSceneMode: (mode: SpaceMapSidebarListMode) => void;
}

export const ContextForSpaceMap = createContext({} as Controller);

export enum SpaceMapInteractionMode {
  CURSOR = 'Cursor',
  SELECTED = 'Selected',
}

export enum SpaceMapIdeaMode {
  VISUAL = 'Visual',
  DETAILS = 'Details',
}

export enum SpaceMapPeopleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpaceMapSidebarMode {
  MEDIA = 'Media',
  LIST = 'List',
}

export enum SpaceMapSidebarListMode {
  DEFAULT = 'Default',
  SCENES = 'Scenes',
}

export function useControllerForSpaceMap(): Controller {
  const [selectedIdea, setSelectedIdea] = useState<SceneIdeaObj | null>(null);
  const [peopleMode, setPeopleMode] = useState<SpaceMapPeopleMode>(
    SpaceMapPeopleMode.OFF,
  );
  const [listSceneMode, setListSceneMode] = useState<SpaceMapSidebarListMode>(
    SpaceMapSidebarListMode.DEFAULT,
  );
  const [mapMode, setMode] = useState<SpaceMapInteractionMode>(
    SpaceMapInteractionMode.SELECTED,
  );
  const [ideaMode, setIdeaMode] = useState<SpaceMapIdeaMode>(
    SpaceMapIdeaMode.VISUAL,
  );
  const [listMode, setListMode] = useState<SpaceMapSidebarMode>(
    SpaceMapSidebarMode.MEDIA,
  );

  return {
    selectedIdea: selectedIdea,
    peopleMode: peopleMode,
    ideaMode: ideaMode,
    mapMode: mapMode,
    sidebarMode: listMode,
    listSceneMode: listSceneMode,
    updateSelectedIdea: (idea) => setSelectedIdea(idea),
    updatePeopleMode: (mode) => setPeopleMode(mode),
    updateIdeaMode: (mode) => setIdeaMode(mode),
    updateMapMode: (mode) => setMode(mode),
    updateSidebarMode: (mode) => setListMode(mode),
    updateListSceneMode: (mode) => setListSceneMode(mode),
  };
}
