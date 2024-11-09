import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/architecture/model/user/main';
import { createContext, useContext, useState } from 'react';

interface ControllerState {
  page: ProfilePage;
  adminMode: boolean;
}

interface ControllerActions {
  updatePage: (page: ProfilePage) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export enum ProfilePage {
  Connections = 'Connections',
  Overview = 'Overview',
}

export const ContextForProfile = createContext({} as Controller);

export function useControllerForUserProfile(): Controller {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const profileUser = useContext(ContextForProfileUserObj);

  const [page, setPage] = useState(ProfilePage.Overview);

  const adminMode = loggedInUser?.id === profileUser?.id;

  return {
    state: {
      page,
      adminMode: adminMode,
    },
    actions: {
      updatePage: (page: ProfilePage) => setPage(page),
    },
  };
}
