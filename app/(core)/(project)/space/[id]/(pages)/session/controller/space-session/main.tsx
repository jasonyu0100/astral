import { ContextForChapterSessionList } from '@/(server)/controller/space/chapter/session/list';
import { ContextForSessionUpdateList } from '@/(server)/controller/space/chapter/session/update/list-from-session';
import { createContext, useContext, useEffect, useState } from 'react';

interface Controller {
  page: SpaceSessionPage;
  setPage: (value: SpaceSessionPage) => void;
  sessionView: boolean;
  updateSessionView: (value: boolean) => void;
  historyView: boolean;
  updateHistoryView: (value: boolean) => void;
}

export enum SpaceSessionPage {
  COMPLETE_SESSION = 'Complete Session',
  COMPLETE_SESSION_UPDATE = 'Complete Session Update',
  VIEW_SESSION = 'View Session',
  VIEW_SESSION_UPDATE = 'View Session Update',
}

export const ContextForSpaceSessionController = createContext({} as Controller);

export function useControllerForSpaceSessionController() {
  const sessionListController = useContext(ContextForChapterSessionList);
  const updateListController = useContext(ContextForSessionUpdateList);
  const sessions = sessionListController?.state?.objs || [];
  const updates = updateListController?.state?.objs || [];

  const [page, setPage] = useState(SpaceSessionPage.VIEW_SESSION);
  const [historyView, setHistoryView] = useState(false);
  const [sessionView, setSessionView] = useState(true);

  useEffect(() => {
    if (sessions.length === 0 && updates.length === 0) {
      setPage(SpaceSessionPage.COMPLETE_SESSION);
    } else if (sessions.length === 0 && updates.length > 0) {
      setPage(SpaceSessionPage.COMPLETE_SESSION);
    } else if (sessions.length > 0 && updates.length > 0) {
      setPage(SpaceSessionPage.COMPLETE_SESSION);
    } else {
      setPage(SpaceSessionPage.COMPLETE_SESSION);
    }
  }, []);

  return {
    page,
    setPage: (value: SpaceSessionPage) => setPage(value),
    sessionView,
    updateSessionView: (value: boolean) => setSessionView(value),
    historyView,
    updateHistoryView: (value: boolean) => setHistoryView(value),
  };
}
