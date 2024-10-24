import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesPostSidebarVisibility;
  sidebarMode: SpacesPostSidebarMode;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesPostSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesPostSidebarMode) => void;
}

export const ContextForSpacesPost = createContext({} as Controller);

export enum SpacesPostSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesPostSidebarMode {
  CHAPTERS = 'Chapters',
  POSTS = 'Posts',
}

export function useControllerForSpacesPost(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesPostSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesPostSidebarVisibility>(SpacesPostSidebarVisibility.OPEN);

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesPostSidebarMode) => setSidebarMode(mode),
    },
  };
}
