import { createContext, useState } from 'react';

export enum ProfilePage {
  About = 'About ℹ️',
  Story = 'Story 📖',
  Projects = 'Projects 📁',
  Contribution = 'Contribution 🌟',
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
  const [page, setPage] = useState(ProfilePage.About);

  return {
    state: {
      page,
    },
    actions: {
      updatePage: (page: ProfilePage) => setPage(page),
    },
  };
}
