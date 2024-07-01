import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { createContext, useContext, useEffect, useState } from 'react';

interface Controller {
  page: SpaceSessionsPage;
  setPage: (value: SpaceSessionsPage) => void;
  sessionView: boolean;
  updateSessionView: (value: boolean) => void;
  historyView: boolean;
  updateHistoryView: (value: boolean) => void;
}

export enum SpaceSessionsPage {
  COMPLETE_SESSION = 'Complete Session',
  COMPLETE_SESSION_UPDATE = 'Complete Session Update',
  VIEW_SESSION = 'View Session',
  VIEW_SESSION_UPDATE = 'View Session Update',
  COMPLETE_UPDATE = 'COMPLETE_UPDATE',
}

export const ContextForSpaceSessionsController = createContext(
  {} as Controller,
);

export function useControllerForSpaceSessionsController() {
  const sessionListController = useContext(ContextForChapterSessionList);
  const updateListController = useContext(ContextForSessionUpdateList);
  const sessions = sessionListController?.state?.objs || [];
  const updates = updateListController?.state?.objs || [];

  const [page, setPage] = useState(SpaceSessionsPage.VIEW_SESSION);
  const [historyView, setHistoryView] = useState(false);
  const [sessionView, setSessionView] = useState(true);

  useEffect(() => {
    if (sessions.length === 0 && updates.length === 0) {
      setPage(SpaceSessionsPage.COMPLETE_SESSION);
    } else if (sessions.length === 0 && updates.length > 0) {
      setPage(SpaceSessionsPage.COMPLETE_SESSION);
    } else if (sessions.length > 0 && updates.length > 0) {
      setPage(SpaceSessionsPage.COMPLETE_SESSION);
    } else {
      setPage(SpaceSessionsPage.COMPLETE_SESSION);
    }
  }, []);

  return {
    page,
    setPage: (value: SpaceSessionsPage) => setPage(value),
    sessionView,
    updateSessionView: (value: boolean) => setSessionView(value),
    historyView,
    updateHistoryView: (value: boolean) => setHistoryView(value),
  };
}
