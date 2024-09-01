import { SceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { createContext, useState } from 'react';

interface Controller {
  selectedIdeas: SceneIdeaObj[];
  connectionMode: SpaceMapConnectionMode;
  ideaMode: SpaceMapIdeaMode;
  mapMode: SpaceMapInteractionMode;
  sidebarMode: SpaceMapSidebarMode;
  listSceneMode: SpaceMapSidebarListMode;
  peopleMode: SpaceMapPeopleMode;
  updateConnectionMode: (mode: SpaceMapConnectionMode) => void;
  updatePeopleMode: (mode: SpaceMapPeopleMode) => void;
  updateSelectedIdeas: (ideas: SceneIdeaObj[]) => void;
  updateIdeaMode: (mode: SpaceMapIdeaMode) => void;
  updateMapMode: (mode: SpaceMapInteractionMode) => void;
  updateSidebarMode: (mode: SpaceMapSidebarMode) => void;
  updateListSceneMode: (mode: SpaceMapSidebarListMode) => void;
  checkContainsSelectedIdea: (ideaObj: SceneIdeaObj) => boolean;
}

export const ContextForSpaceMap = createContext({} as Controller);

export enum SpaceMapInteractionMode {
  CURSOR = 'Cursor',
  SELECTED = 'Selected',
}

export enum SpaceMapIdeaMode {
  DEFAULT = 'Default',
  INFORMATION = 'Information',
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
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
}

export enum SpaceMapConnectionMode {
  DEFAULT = 'Default',
  BUBBLE = 'Bubble',
}

export function useControllerForSpaceMap(): Controller {
  const [selectedIdeas, setSelectedIdeas] = useState<SceneIdeaObj[]>([]);
  const [peopleMode, setPeopleMode] = useState<SpaceMapPeopleMode>(
    SpaceMapPeopleMode.OFF,
  );
  const [listSceneMode, setListSceneMode] = useState<SpaceMapSidebarListMode>(
    SpaceMapSidebarListMode.SCENES,
  );
  const [mapMode, setMode] = useState<SpaceMapInteractionMode>(
    SpaceMapInteractionMode.SELECTED,
  );
  const [ideaMode, setIdeaMode] = useState<SpaceMapIdeaMode>(
    SpaceMapIdeaMode.DEFAULT,
  );
  const [listMode, setListMode] = useState<SpaceMapSidebarMode>(
    SpaceMapSidebarMode.LIST,
  );
  const [connectionMode, setConnectionMode] = useState<SpaceMapConnectionMode>(
    SpaceMapConnectionMode.DEFAULT,
  );

  return {
    connectionMode: connectionMode,
    selectedIdeas: selectedIdeas,
    peopleMode: peopleMode,
    ideaMode: ideaMode,
    mapMode: mapMode,
    sidebarMode: listMode,
    listSceneMode: listSceneMode,
    updateConnectionMode: (mode) => setConnectionMode(mode),
    updateSelectedIdeas: (ideas) => setSelectedIdeas(ideas),
    updatePeopleMode: (mode) => setPeopleMode(mode),
    updateIdeaMode: (mode) => setIdeaMode(mode),
    updateMapMode: (mode) => setMode(mode),
    updateSidebarMode: (mode) => setListMode(mode),
    updateListSceneMode: (mode) => setListSceneMode(mode),
    checkContainsSelectedIdea: (ideaObj: SceneIdeaObj) =>
      selectedIdeas.map((idea) => idea.id).includes(ideaObj.id),
  };
}
