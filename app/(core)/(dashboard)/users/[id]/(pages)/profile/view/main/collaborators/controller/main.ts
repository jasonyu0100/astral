import { createContext, useState } from 'react';

export enum CollaboratorsPage {
  Collaborators = 'Collaborators',
  Links = 'Links',
}

interface ControllerState {
  page: CollaboratorsPage;
}

interface ControllerActions {
  updatePage: (view: CollaboratorsPage) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForCollaborators = createContext({} as Controller);

export function useControllerForCollaborators(): Controller {
  const [page, setPage] = useState(CollaboratorsPage.Collaborators);

  return {
    state: {
      page,
    },
    actions: {
      updatePage: (page: CollaboratorsPage) => setPage(page),
    },
  };
}
