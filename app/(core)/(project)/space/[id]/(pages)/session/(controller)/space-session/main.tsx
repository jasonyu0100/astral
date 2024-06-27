import { createContext, useState } from 'react';

interface Controller {
  sessionView: boolean;
  updateSessionView: (value: boolean) => void;
  historyView: boolean;
  updateHistoryView: (value: boolean) => void;
}

export const ContextForSpaceSessionController = createContext({} as Controller);

export function useControllerForSpaceSessionController() {
  const [historyView, setHistoryView] = useState(false);
  const [sessionView, setSessionView] = useState(true);

  return {
    sessionView,
    updateSessionView: (value: boolean) => setSessionView(value),
    historyView,
    updateHistoryView: (value: boolean) => setHistoryView(value),
  };
}
