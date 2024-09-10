import { createContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpaceFlightSidebarVisibility;
}

interface ControllerActions {
  updateSidebarVisibility: (visibility: SpaceFlightSidebarVisibility) => void;
}

export const ContextForSpaceFlight = createContext({} as Controller);

export enum SpaceFlightSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export function useControllerForSpaceFlight(): Controller {
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpaceFlightSidebarVisibility>(SpaceFlightSidebarVisibility.OPEN);

  return {
    state: {
      sidebarVisibility: sidebarVisibility,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
    },
  };
}
