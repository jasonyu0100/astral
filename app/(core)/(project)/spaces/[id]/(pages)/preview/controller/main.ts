import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesPreviewSidebarVisibility;
  sidebarMode: SpacesPreviewSidebarMode;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesPreviewSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesPreviewSidebarMode) => void;
}

export const ContextForSpacesPreview = createContext({} as Controller);

export enum SpacesPreviewSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesPreviewSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export function useControllerForSpacesPreview(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesPreviewSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesPreviewSidebarVisibility>(
      SpacesPreviewSidebarVisibility.OPEN,
    );

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesPreviewSidebarMode) =>
        setSidebarMode(mode),
    },
  };
}
