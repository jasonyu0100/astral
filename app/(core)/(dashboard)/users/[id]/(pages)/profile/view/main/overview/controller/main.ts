import { createContext, useState } from 'react';

export enum ProfilePage {
  // Story = 'Story',
  Spaces = 'Spaces',
  Highlights = 'Highlights',
  // Aura = 'Aura',
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
  const [page, setPage] = useState(ProfilePage.Highlights);

  return {
    state: {
      page,
    },
    actions: {
      updatePage: (page: ProfilePage) => setPage(page),
    },
  };
}
