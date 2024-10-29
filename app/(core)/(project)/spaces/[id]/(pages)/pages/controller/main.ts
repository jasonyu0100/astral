import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesPagesSidebarVisibility;
  sidebarMode: SpacesPagesSidebarMode;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesPagesSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesPagesSidebarMode) => void;
}

export const ContextForSpacesPages = createContext({} as Controller);

export enum SpacesPagesSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesPagesSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export function useControllerForSpacesPages(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesPagesSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesPagesSidebarVisibility>(SpacesPagesSidebarVisibility.OPEN);

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesPagesSidebarMode) => setSidebarMode(mode),
    },
  };
}
