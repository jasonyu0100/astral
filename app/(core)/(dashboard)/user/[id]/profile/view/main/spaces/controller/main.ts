import { createContext, useState } from 'react';

export enum ProfilePage {
  Spaces = 'Spaces',
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

export const ContextForUserProfileSpaces = createContext({} as Controller);

export function useControllerForUserProfileSpaces(): Controller {
  const [page, setPage] = useState(ProfilePage.Spaces);

  return {
    state: {
      page,
    },
    actions: {
      updatePage: (page: ProfilePage) => setPage(page),
    },
  };
}
