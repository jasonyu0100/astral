import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesFlightSidebarVisibility;
  sidebarMode: SpacesFlightSidebarMode;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesFlightSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesFlightSidebarMode) => void;
}

export const ContextForSpacesFlight = createContext({} as Controller);

export enum SpacesFlightSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesFlightSidebarMode {
  CHAPTERS = 'Chapters',
  POSTS = 'Posts',
}

export function useControllerForSpacesFlight(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesFlightSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesFlightSidebarVisibility>(SpacesFlightSidebarVisibility.OPEN);

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesFlightSidebarMode) =>
        setSidebarMode(mode),
    },
  };
}
