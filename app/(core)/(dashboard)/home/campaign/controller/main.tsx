import { createContext, useState } from 'react';

interface ControllerState {
  inFlow: boolean;
  selectedSpaces: string[];
}

interface ControllerActions {
  updateInFlow: (inFlow: boolean) => void;
  updateSelectedSpaces: (spaces: string[]) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForHomeCampaign = createContext({} as Controller);

export const useControllerForHomeCampaign = (): Controller => {
  const [inFlow, setInFlow] = useState(false);
  const [selectedSpaces, setSelectedSpaces] = useState<string[]>([]);

  return {
    state: {
      inFlow,
      selectedSpaces,
    },
    actions: {
      updateInFlow: setInFlow,
      updateSelectedSpaces: setSelectedSpaces,
    },
  };
};
