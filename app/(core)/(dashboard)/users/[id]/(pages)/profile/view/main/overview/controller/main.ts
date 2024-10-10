import { createContext, useState } from 'react';

export enum ProfilePage {
  Overview = 'Overview',
  Storyline = 'Storyline',
}

interface ControllerState {
  page: ProfilePage;
}

interface ControllerActions {
  updatePage: (view: ProfilePage) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForProfile = createContext({} as Controller);

export function useControllerForProfile(): Controller {
  const [page, setPage] = useState(ProfilePage.Overview);

  return {
    state: {
      page,
    },
    actions: {
      updatePage: (page: ProfilePage) => setPage(page),
    },
  };
}
