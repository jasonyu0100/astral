import { createContext, useState } from 'react';

interface ControllerState {
  inFlow: boolean;
}

interface ControllerActions {
  updateInFlow: (inFlow: boolean) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForCreateSpaces = createContext({} as Controller);

export const useControllerForCreateSpaces = (): Controller => {
  const [inFlow, setInFlow] = useState(false);

  return {
    state: {
      inFlow,
    },
    actions: {
      updateInFlow: setInFlow,
    },
  };
};
