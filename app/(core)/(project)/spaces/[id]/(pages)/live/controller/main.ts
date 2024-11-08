import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { UserPostObj } from '@/architecture/model/post/main';
import { createContext, useContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesLiveSidebarVisibility;
  sidebarMode: SpacesLiveSidebarMode;
  selectedPosts: UserPostObj[];
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesLiveSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesLiveSidebarMode) => void;
  updateSelectedPosts: (posts: UserPostObj[]) => void;
  deletedSelectedPosts: () => void;
}

export const ContextForSpacesLive = createContext({} as Controller);

export enum SpacesLiveSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesLiveSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export function useControllerForSpacesLive(): Controller {
  const postListController = useContext(ContextForUserPostListFromChapter);

  const [sidebarMode, setSidebarMode] = useState(
    SpacesLiveSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesLiveSidebarVisibility>(SpacesLiveSidebarVisibility.OPEN);
  const [selectedPosts, setSelectedPosts] = useState<UserPostObj[]>([]);

  const deletedSelectedPosts = async () => {
    postListController.actions.deleteActions
      .deleteMany(selectedPosts.map((post) => post.id))
      .then(() => {
        setSelectedPosts([]);
      });
  };

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
      sidebarMode: sidebarMode,
      selectedPosts: selectedPosts,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode: SpacesLiveSidebarMode) => setSidebarMode(mode),
      updateSelectedPosts: (posts) => setSelectedPosts(posts),
      deletedSelectedPosts: deletedSelectedPosts,
    },
  };
}
