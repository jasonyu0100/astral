import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/model/user/main';
import { createContext, useContext, useState } from 'react';

interface ControllerState {
  page: UserProfilePage;
  adminMode: boolean;
}

interface ControllerActions {
  updatePage: (page: UserProfilePage) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export enum UserProfilePage {
  Connections = 'Connections',
  Overview = 'Overview',
}

export const ContextForUserProfile = createContext({} as Controller);

export function useControllerForUserProfile(): Controller {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const profileUser = useContext(ContextForProfileUserObj);

  const [page, setPage] = useState(UserProfilePage.Overview);

  const adminMode = loggedInUser.id === profileUser.id;

  return {
    state: {
      page,
      adminMode: adminMode,
    },
    actions: {
      updatePage: (page: UserProfilePage) => setPage(page),
    },
  };
}
