import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesPreviewSidebarVisibility;
  sidebarMode: SpacesPreviewSidebarMode;
  feedView: SpacesPreviewFeedView;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesPreviewSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesPreviewSidebarMode) => void;
  updateFeedView: (view: SpacesPreviewFeedView) => void;
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

export enum SpacesPreviewFeedView {
  CHAPTER = 'Chapter',
  POST = 'Post',
}

export function useControllerForSpacesPreview(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesPreviewSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesPreviewSidebarVisibility>(
      SpacesPreviewSidebarVisibility.OPEN,
    );
  const [feedView, setFeedView] = useState(SpacesPreviewFeedView.CHAPTER);

  return {
    state: {
      feedView: feedView,
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
    },
    actions: {
      updateFeedView: (view: SpacesPreviewFeedView) => setFeedView(view),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesPreviewSidebarMode) =>
        setSidebarMode(mode),
    },
  };
}
