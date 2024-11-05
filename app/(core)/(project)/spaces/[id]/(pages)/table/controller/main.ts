import { UserPostObj } from '@/architecture/model/post/main';
import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesTableSidebarVisibility;
  sidebarMode: SpacesTableSidebarMode;
  selectedPosts: UserPostObj[];
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesTableSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesTableSidebarMode) => void;
  updateSelectedPosts: (posts: UserPostObj[]) => void;
}

export const ContextForSpacesTable = createContext({} as Controller);

export enum SpacesTableSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesTableSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export function useControllerForSpacesTable(): Controller {
  const [sidebarMode, setSidebarMode] = useState(
    SpacesTableSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesTableSidebarVisibility>(SpacesTableSidebarVisibility.OPEN);
  const [selectedPosts, setSelectedPosts] = useState<UserPostObj[]>([]);

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
      selectedPosts: selectedPosts,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesTableSidebarMode) => setSidebarMode(mode),
      updateSelectedPosts: (posts) => setSelectedPosts(posts),
    },
  };
}
