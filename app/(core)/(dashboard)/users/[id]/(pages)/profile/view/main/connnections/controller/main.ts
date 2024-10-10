import { createContext, useState } from 'react';

export enum ConnectionsPage {
  Following = 'Following',
  Followers = 'Followers',
}

interface ControllerState {
  page: ConnectionsPage;
}

interface ControllerActions {
  updatePage: (view: ConnectionsPage) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForCollaborators = createContext({} as Controller);

export function useControllerForCollaborators(): Controller {
  const [page, setPage] = useState(ConnectionsPage.Following);

  return {
    state: {
      page,
    },
    actions: {
      updatePage: (page: ConnectionsPage) => setPage(page),
    },
  };
}
