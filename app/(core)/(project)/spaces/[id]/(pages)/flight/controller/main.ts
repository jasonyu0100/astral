import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesFlightSidebarVisibility;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpacesFlightSidebarVisibility) => void;
}

export const ContextForSpacesFlight = createContext({} as Controller);

export enum SpacesFlightSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpacesFlight(): Controller {
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesFlightSidebarVisibility>(SpacesFlightSidebarVisibility.OPEN);

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
    },
  };
}
