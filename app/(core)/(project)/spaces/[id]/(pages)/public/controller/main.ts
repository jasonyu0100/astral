import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { UserPostObj } from '@/architecture/model/post/main';
import { createContext, useContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesPublicSidebarVisibility;
  sidebarMode: SpacesPublicSidebarMode;
  selectedPosts: UserPostObj[];
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesPublicSidebarVisibility) => void;
  updateSidebarMode: (mode: SpacesPublicSidebarMode) => void;
  updateSelectedPosts: (posts: UserPostObj[]) => void;
  deletedSelectedPosts: () => void;
}

export const ContextForSpacesPublic = createContext({} as Controller);

export enum SpacesPublicSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesPublicSidebarMode {
  CHAPTERS = 'Chapters',
  Attachments = 'Attachments',
}

export function useControllerForSpacesPublic(): Controller {
  const postListController = useContext(ContextForUserPostListFromChapter);

  const [sidebarMode, setSidebarMode] = useState(
    SpacesPublicSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesPublicSidebarVisibility>(SpacesPublicSidebarVisibility.OPEN);
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
      updateSidebarMode: (mode: SpacesPublicSidebarMode) =>
        setSidebarMode(mode),
      updateSelectedPosts: (posts) => setSelectedPosts(posts),
      deletedSelectedPosts: deletedSelectedPosts,
    },
  };
}
