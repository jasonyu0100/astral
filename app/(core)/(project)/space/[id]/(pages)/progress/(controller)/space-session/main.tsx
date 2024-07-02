import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { createContext, useContext, useEffect, useState } from 'react';

interface Controller {
  page: SpaceProgressPage;
  setPage: (value: SpaceProgressPage) => void;
  sessionView: boolean;
  updateSessionView: (value: boolean) => void;
  historyView: boolean;
  updateHistoryView: (value: boolean) => void;
}

export enum SpaceProgressPage {
  COMPLETE_SESSION = 'Complete Session',
  COMPLETE_SESSION_UPDATE = 'Complete Session Update',
  VIEW_SESSION = 'View Session',
  VIEW_SESSION_UPDATE = 'View Session Update',
}

export const ContextForSpaceProgressController = createContext(
  {} as Controller,
);

export function useControllerForSpaceProgressController() {
  const sessionListController = useContext(ContextForChapterSessionList);
  const updateListController = useContext(ContextForSessionUpdateList);
  const sessions = sessionListController?.state?.objs || [];
  const updates = updateListController?.state?.objs || [];

  const [page, setPage] = useState(SpaceProgressPage.VIEW_SESSION);
  const [historyView, setHistoryView] = useState(false);
  const [sessionView, setSessionView] = useState(true);

  useEffect(() => {
    if (sessions.length === 0 && updates.length === 0) {
      setPage(SpaceProgressPage.COMPLETE_SESSION);
    } else if (sessions.length === 0 && updates.length > 0) {
      setPage(SpaceProgressPage.COMPLETE_SESSION);
    } else if (sessions.length > 0 && updates.length > 0) {
      setPage(SpaceProgressPage.COMPLETE_SESSION);
    } else {
      setPage(SpaceProgressPage.COMPLETE_SESSION);
    }
  }, []);

  return {
    page,
    setPage: (value: SpaceProgressPage) => setPage(value),
    sessionView,
    updateSessionView: (value: boolean) => setSessionView(value),
    historyView,
    updateHistoryView: (value: boolean) => setHistoryView(value),
  };
}
