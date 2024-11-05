import { createContext, useState } from 'react';

export enum PublicSpaceFeedView {
  CHANNEL = 'Channel',
  POSTS = 'Posts',
  POST = 'Post',
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  feedView: PublicSpaceFeedView;
}

interface ControllerActions {
  updateFeedView: (view: PublicSpaceFeedView) => void;
}

export const ContextForPublicSpace = createContext({} as Controller);

export function useControllerForPublicSpace(): Controller {
  const [feedView, setFeedView] = useState(PublicSpaceFeedView.POSTS);
  return {
    state: { feedView },
    actions: {
      updateFeedView: (view: PublicSpaceFeedView) => setFeedView(view),
    },
  };
}
