import { createContext, useState } from 'react';

interface Controller {
  complete: boolean;
  updateComplete: (value: boolean) => void;
}

export const ContextForSpaceSessionController = createContext({} as Controller);

export function useControllerForSpaceSessionController() {
  const [complete, setComplete] = useState(true);

  const context = {
    complete,
    updateComplete: (value: boolean) => setComplete(value),
  };

  return context;
}
