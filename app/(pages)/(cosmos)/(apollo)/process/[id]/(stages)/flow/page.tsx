"use client";
import { createContext, useState } from "react";
import { FlowView } from "./view";
import { ChapterObj } from "../../../../../tables/space/chapter/main";
import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";
import { flowTable } from "@/(pages)/(cosmos)/tables/flow/table";
import { SessionObj } from "@/(pages)/(cosmos)/tables/flow/session/main";

interface FlowContextObj {
  sessionHandler: SessionHandler;
  chapterHandler: ChapterHandler;
}

export const FlowContext = createContext<FlowContextObj>({});

export interface SessionHandler {
  updateCurrentMoment: (moment: SessionObj) => void;
  addSessionToStep: (moment: SessionObj) => void;
  addSnapshotToSession: (snapshot: FileObj) => void;
}

export interface ChapterHandler {
  addChapter: (step: ChapterObj) => void;
  goToChapter: (step: ChapterObj) => void;
}
export interface FlowViewProps {
  sessionId: string;
  chapterId: string;
  sessions: SessionObj[];
  chapters: ChapterObj[];
  sessionHandler: SessionHandler;
  chapterHandler: ChapterHandler;
}

export default function Page() {
  const [chapters, changeChapters] = useState<ChapterObj[]>(
    spaceTable.chapter.examples
  );
  const [stepId, changeStepId] = useState<string>(chapters.at(0)?.id || "");

  const [sessions, changeSessions] = useState<SessionObj[]>(
    flowTable.session.examples
  );
  const [sessionId, changeSessionId] = useState<string>(sessions.at(0)?.id || "");

  // const syncHandler = {
  //   serialize: (obj: any) => JSON.parse(JSON.stringify(obj)),
  //   getCurrentStep: (steps: ChapterObj[]) =>
  //     steps.filter((step) => step.id === stepId).at(0),
  //   syncWithinSteps: () => {
  //     const currentStep: ChapterObj = syncHandler.serialize(
  //       syncHandler.getCurrentStep(chapters)
  //     );
  //     if (currentStep) {
  //       currentStep.points.flowPoint.moments = sessions;
  //       const newStep = currentStep;
  //       changeChapters((prev) =>
  //         prev.map((step) => (step.id === stepId ? newStep : step))
  //       );
  //     }
  //   },
  // };

  const chapterHandler : ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      // syncHandler.syncWithinSteps();
      changeStepId(chapter.id);
      changeChapters((prev) => [...prev, chapter]);
      const chapterSessions = flowTable.session.examples;
      changeSessions(chapterSessions);
      changeSessionId(chapterSessions.at(-1)?.id || "");
    },
    goToChapter: (chapter: ChapterObj) => {
      // syncHandler.syncWithinSteps();
      changeStepId(chapter.id);
      const chapterSessions = flowTable.session.examples;
      changeSessions(chapterSessions);
      changeSessionId(chapterSessions.at(-1)?.id || "");
    },
  };

  const sessionHelper = {
    updateSessionsWithCurrent: (newCurrentSession: SessionObj) => {
      changeSessions((prev) =>
        prev.map((moment) =>
          moment.id === newCurrentSession.id ? newCurrentSession : moment
        )
      );
    },

    getCurrentSession: () => {
      for (let session of sessions) {
        if (session.id === sessionId) {
          return session;
        }
      }
      return null;
    },
  };

  const sessionHandler: SessionHandler = {
    updateCurrentMoment: (session: SessionObj) => {
      changeSessionId(session.id);
    },

    addSessionToStep: (session: SessionObj) => {
      changeSessionId(session.id);
      changeSessions((prev) => [...prev, session]);
    },

    addSnapshotToSession: (snapshot: FileObj) => {
      const currentSession = sessionHelper.getCurrentSession();
      if (currentSession) {
        const newSession = {
          ...currentSession,
          moments: [...currentSession.moments, {
            ...flowTable.session.moment.example,
            file: snapshot
          }],
        };
        sessionHelper.updateSessionsWithCurrent(newSession);
      }
    },
  };

  return (
    <FlowContext.Provider
      value={{
        sessionHandler: sessionHandler,
        chapterHandler: chapterHandler
      }}
    >
      <FlowView
        sessionId={sessionId}
        chapterId={stepId}
        sessions={sessions}
        chapters={chapters}
        sessionHandler={sessionHandler}
        chapterHandler={chapterHandler}
      />
    </FlowContext.Provider>
  );
}
