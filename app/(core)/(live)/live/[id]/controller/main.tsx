import { createContext, useState } from 'react';

export enum PublicSpaceFeedView {
  CHAT = 'Chat',
  FOCUS = 'Focus',
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
  const [feedView, setFeedView] = useState(PublicSpaceFeedView.FOCUS);
  return {
    state: { feedView },
    actions: {
      updateFeedView: (view: PublicSpaceFeedView) => setFeedView(view),
    },
  };
}
