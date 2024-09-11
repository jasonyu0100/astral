import { createContext, useState } from 'react';

export enum ProfileSupporterPage {
  Supporters = 'Supporters', // Who the user is backing
  Proposals = 'Proposals', // Who is backing the user
}

interface ControllerState {
  page: ProfileSupporterPage;
}

interface ControllerActions {
  updatePage: (view: ProfileSupporterPage) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForSupporters = createContext({} as Controller);

export function useProfileSupportersController() {
  const [page, setPage] = useState(ProfileSupporterPage.Supporters);

  return {
    state: {
      page,
    },
    actions: {
      updatePage: setPage,
    },
  };
}
