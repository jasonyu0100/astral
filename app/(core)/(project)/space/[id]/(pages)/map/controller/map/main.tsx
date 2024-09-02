import { SceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  selectedIdeas: SceneIdeaObj[];
  connectionMode: SpaceMapConnectionMode;
  mapMode: SpaceMapInteractionMode;
  sidebarMode: SpaceMapSidebarMode;
  listSceneMode: SpaceMapSidebarListMode;
  peopleMode: SpaceMapPeopleMode;
}

interface ControllerActions {
  updateConnectionMode: (mode: SpaceMapConnectionMode) => void;
  updatePeopleMode: (mode: SpaceMapPeopleMode) => void;
  updateSelectedIdeas: (ideas: SceneIdeaObj[]) => void;
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
  const [listMode, setListMode] = useState<SpaceMapSidebarMode>(
    SpaceMapSidebarMode.LIST,
  );
  const [connectionMode, setConnectionMode] = useState<SpaceMapConnectionMode>(
    SpaceMapConnectionMode.DEFAULT,
  );

  return {
    state: {
      connectionMode: connectionMode,
      selectedIdeas: selectedIdeas,
      peopleMode: peopleMode,
      mapMode: mapMode,
      sidebarMode: listMode,
      listSceneMode: listSceneMode,
    },
    actions: {
      updateConnectionMode: (mode) => setConnectionMode(mode),
      updateSelectedIdeas: (ideas) => setSelectedIdeas(ideas),
      updatePeopleMode: (mode) => setPeopleMode(mode),
      updateMapMode: (mode) => setMode(mode),
      updateSidebarMode: (mode) => setListMode(mode),
      updateListSceneMode: (mode) => setListSceneMode(mode),
      checkContainsSelectedIdea: (idea: SceneIdeaObj) =>
        selectedIdeas.map((idea) => idea.id).includes(idea.id),
    },
  };
}
