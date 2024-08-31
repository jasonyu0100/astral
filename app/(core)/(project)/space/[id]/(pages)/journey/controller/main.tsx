import { SceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { createContext, useState } from 'react';

interface Controller {
  selectedIdea: SceneIdeaObj | null;
  listSceneMode: SpaceJourneySidebarListMode;
  updateSelectedIdea: (idea: SceneIdeaObj | null) => void;
  updateListSceneMode: (mode: SpaceJourneySidebarListMode) => void;
}

export const ContextForSpaceJourney = createContext({} as Controller);

export enum SpaceJourneySidebarMode {
  MEDIA = 'Media',
  LIST = 'List',
}

export enum SpaceJourneySidebarListMode {
  DEFAULT = 'Default',
  SCENES = 'Scenes',
}

export function useControllerForSpaceJourney(): Controller {
  const [selectedIdea, setSelectedIdea] = useState<SceneIdeaObj | null>(null);
  const [listSceneMode, setListSceneMode] =
    useState<SpaceJourneySidebarListMode>(SpaceJourneySidebarListMode.SCENES);

  return {
    selectedIdea: selectedIdea,
    listSceneMode: listSceneMode,
    updateSelectedIdea: (idea) => setSelectedIdea(idea),
    updateListSceneMode: (mode) => setListSceneMode(mode),
  };
}
