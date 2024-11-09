import { createContext, useState } from 'react';

export enum UserProfileConnectionsPage {
  Following = 'Following',
  Followers = 'Followers',
}

interface ControllerState {
  page: UserProfileConnectionsPage;
}

interface ControllerActions {
  updatePage: (view: UserProfileConnectionsPage) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForUserProfileConnections = createContext({} as Controller);

export function useControllerForUserProfileConnections(): Controller {
  const [page, setPage] = useState(UserProfileConnectionsPage.Following);

  return {
    state: {
      page,
    },
    actions: {
      updatePage: (page: UserProfileConnectionsPage) => setPage(page),
    },
  };
}
