import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesUpdatesSidebarVisibility;
  sidebarMode: SpacesUpdatesSidebarMode;
  feedView: SpacesUpdatesFeedView;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesUpdatesSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesUpdatesSidebarMode) => void;
  updateFeedView: (view: SpacesUpdatesFeedView) => void;
}

export const ContextForSpacesUpdates = createContext({} as Controller);

export enum SpacesUpdatesSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesUpdatesSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export enum SpacesUpdatesFeedView {
  CHAPTER = 'Chapter',
  POST = 'Post',
}

export function useControllerForSpacesUpdates(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesUpdatesSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesUpdatesSidebarVisibility>(
      SpacesUpdatesSidebarVisibility.OPEN,
    );
  const [feedView, setFeedView] = useState(SpacesUpdatesFeedView.CHAPTER);

  return {
    state: {
      feedView: feedView,
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateFeedView: (view: SpacesUpdatesFeedView) => setFeedView(view),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesUpdatesSidebarMode) =>
        setSidebarMode(mode),
    },
  };
}
