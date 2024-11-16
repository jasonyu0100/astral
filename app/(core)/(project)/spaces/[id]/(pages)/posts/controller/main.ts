import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { UserPostObj } from '@/architecture/model/post/main';
import { createContext, useContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesPostsSidebarVisibility;
  sidebarMode: SpacesPostsSidebarMode;
  selectedPosts: UserPostObj[];
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesPostsSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesPostsSidebarMode) => void;
  updateSelectedPosts: (posts: UserPostObj[]) => void;
  deletedSelectedPosts: () => void;
}

export const ContextForSpacesPosts = createContext({} as Controller);

export enum SpacesPostsSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesPostsSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export function useControllerForSpacesPosts(): Controller {
  const postListController = useContext(ContextForUserPostListFromChapter);

  const [sidebarMode, setSidebarMode] = useState(
    SpacesPostsSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesPostsSidebarVisibility>(SpacesPostsSidebarVisibility.OPEN);
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
      updateSidebarMode: (mode: SpacesPostsSidebarMode) => setSidebarMode(mode),
      updateSelectedPosts: (posts) => setSelectedPosts(posts),
      deletedSelectedPosts: deletedSelectedPosts,
    },
  };
}
