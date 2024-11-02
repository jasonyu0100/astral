import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpaceInboxSidebarVisibility;
  sidebarMode: SpaceInboxSidebarMode;
  feedView: SpaceInboxFeedView;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpaceInboxSidebarVisibility) => void;
  updateSidebarMode: (mode: SpaceInboxSidebarMode) => void;
  updateFeedView: (view: SpaceInboxFeedView) => void;
}

export const ContextForSpaceInbox = createContext({} as Controller);

export enum SpaceInboxSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpaceInboxSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export enum SpaceInboxFeedView {
  CHAPTER = 'Chapter',
  POST = 'Post',
}

export function useControllerForSpaceInbox(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpaceInboxSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpaceInboxSidebarVisibility>(SpaceInboxSidebarVisibility.OPEN);
  const [feedView, setFeedView] = useState(SpaceInboxFeedView.CHAPTER);

  return {
    state: {
      feedView: feedView,
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateFeedView: (view: SpaceInboxFeedView) => setFeedView(view),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpaceInboxSidebarMode) => setSidebarMode(mode),
    },
  };
}
