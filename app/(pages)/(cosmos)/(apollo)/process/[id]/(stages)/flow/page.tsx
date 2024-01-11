"use client";
import { createContext } from "react";
import { FlowView } from "./view";
import { ChapterObj } from "../../../../../tables/space/chapter/main";
import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { SessionObj } from "@/(pages)/(cosmos)/tables/flow/session/main";
import { ChapterHandler, useChapters } from "../../handler/chapters/main";
import { MomentHandler, SessionHandler, useSession } from "../../handler/sessions/main";
import { MomentObj } from "@/(pages)/(cosmos)/tables/flow/session/moment/main";

interface FlowContextObj {
  sessionHandler: SessionHandler;
  chapterHandler: ChapterHandler;
  momentHandler: MomentHandler;
}

export const FlowContext = createContext<FlowContextObj>({});
export interface FlowViewProps {
  moments: MomentObj[];
  sessionId: string;
  chapterId: string;
  sessions: SessionObj[];
  chapters: ChapterObj[];
  sessionHandler: SessionHandler;
  chapterHandler: ChapterHandler;
  momentHandler: MomentHandler;
}

export default function Page() {
  const { chapters, chapterId, _chapterHandler } = useChapters();
  const { moments, _momentHandler, sessions, sessionId, _sessionHandler } = useSession();

  const chapterHandler: ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      _chapterHandler.addChapter(chapter);
      _sessionHandler.updateSessions([])
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      _chapterHandler.goToChapter(chapter);
      _sessionHandler.updateSessions([])
      return chapter;
    },
    goToPrevChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter();
      _sessionHandler.updateSessions([])
      return chapter;
    },
    goToNextChapter: () => {
      const chapter = _chapterHandler.goToNextChapter();
      _sessionHandler.updateSessions([])
      return chapter;
    },
  };

  const sessionHandler: SessionHandler = {
    updateSessions: (sessions: SessionObj[]) => {
      _sessionHandler.updateSessions(sessions)
      return sessions;
    },
    updateSession: (session: SessionObj) => {
      _sessionHandler.updateSession(session);
      return session;
    },
    addSession: (session: SessionObj) => {
      _sessionHandler.addSession(session);
      return session;
    },

    addFileToSession: (file: FileObj) => {
      const session = _sessionHandler.addFileToSession(file);
      return session;
    },
  };

  const momentHandler: MomentHandler = {
    addMoment: (moment: MomentObj) => {
      _momentHandler.addMoment(moment);
      return moment;
    }
  }

  return (
    <FlowContext.Provider
      value={{
        sessionHandler: sessionHandler,
        chapterHandler: chapterHandler,
        momentHandler: momentHandler,
      }}
    >
      <FlowView
        moments={moments}
        sessionId={sessionId}
        chapterId={chapterId}
        sessions={sessions}
        chapters={chapters}
        sessionHandler={sessionHandler}
        chapterHandler={chapterHandler}
        momentHandler={momentHandler}
      />
    </FlowContext.Provider>
  );
}
