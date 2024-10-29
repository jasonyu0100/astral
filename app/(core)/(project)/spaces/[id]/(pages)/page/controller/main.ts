import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesPageSidebarVisibility;
  sidebarMode: SpacesPageSidebarMode;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesPageSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesPageSidebarMode) => void;
}

export const ContextForSpacesPage = createContext({} as Controller);

export enum SpacesPageSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesPageSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export function useControllerForSpacesPage(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesPageSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesPageSidebarVisibility>(SpacesPageSidebarVisibility.OPEN);

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesPageSidebarMode) => setSidebarMode(mode),
    },
  };
}
