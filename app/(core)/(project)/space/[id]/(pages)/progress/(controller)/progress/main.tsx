import { SceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { createContext, useState } from 'react';

interface Controller {
  selectedIdea: SceneIdeaObj | null;
  listSceneMode: SpaceProgressSidebarListMode;
  updateSelectedIdea: (idea: SceneIdeaObj | null) => void;
  updateListSceneMode: (mode: SpaceProgressSidebarListMode) => void;
}

export const ContextForSpaceProgress = createContext({} as Controller);

export enum SpaceProgressSidebarMode {
  MEDIA = 'Media',
  LIST = 'List',
}

export enum SpaceProgressSidebarListMode {
  DEFAULT = 'Default',
  SCENES = 'Scenes',
}

export function useControllerForSpaceProgress(): Controller {
  const [selectedIdea, setSelectedIdea] = useState<SceneIdeaObj | null>(null);
  const [listSceneMode, setListSceneMode] =
    useState<SpaceProgressSidebarListMode>(
      SpaceProgressSidebarListMode.DEFAULT,
    );

  return {
    selectedIdea: selectedIdea,
    listSceneMode: listSceneMode,
    updateSelectedIdea: (idea) => setSelectedIdea(idea),
    updateListSceneMode: (mode) => setListSceneMode(mode),
  };
}
