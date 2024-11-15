import { createContext, useState } from 'react';

export enum PublicSpaceFeedView {
  FOCUS = 'Focus',
  POSTS = 'Posts',
  CHAT = 'Chat',
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
