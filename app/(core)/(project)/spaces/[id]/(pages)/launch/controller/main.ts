import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesLaunchSidebarVisibility;
  sidebarMode: SpacesLaunchSidebarMode;
  feedView: SpacesLaunchFeedView;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesLaunchSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesLaunchSidebarMode) => void;
  updateFeedView: (view: SpacesLaunchFeedView) => void;
}

export const ContextForSpacesLaunch = createContext({} as Controller);

export enum SpacesLaunchSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesLaunchSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export enum SpacesLaunchFeedView {
  CHAPTER = 'Chapter',
  POST = 'Post',
}

export function useControllerForSpacesLaunch(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesLaunchSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesLaunchSidebarVisibility>(SpacesLaunchSidebarVisibility.OPEN);
  const [feedView, setFeedView] = useState(SpacesLaunchFeedView.CHAPTER);

  return {
    state: {
      feedView: feedView,
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateFeedView: (view: SpacesLaunchFeedView) => setFeedView(view),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesLaunchSidebarMode) =>
        setSidebarMode(mode),
    },
  };
}
