import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { SessionObj } from "@/(pages)/(cosmos)/tables/flow/session/main";
import { MomentObj } from "@/(pages)/(cosmos)/tables/flow/session/moment/main";
import { flowTable } from "@/(pages)/(cosmos)/tables/flow/table";
import { useState } from "react";

export interface SessionHandler {
  updateSession: (session: SessionObj) => SessionObj;
  addSession: (session: SessionObj) => SessionObj;
  addFileToSession: (file: FileObj) => SessionObj | undefined;
}

export interface MomentHandler {
    addMoment: (moment: MomentObj) => MomentObj;
}

export interface useSessionInterface {
    moments: MomentObj[];
    sessionId: string;
    sessions: SessionObj[];
    _sessionHandler: SessionHandler;
    _momentHandler: MomentHandler;
}

export const useSession = () : useSessionInterface => {
  const [sessions, changeSessions] = useState<SessionObj[]>(
    flowTable.session.examples
  );
  const [sessionId, changeSessionId] = useState<string>(
    sessions.at(0)?.id || ""
  );

  const session = sessions.filter((session) => session.id === sessionId).at(0);

  const [moments, changeMoments] = useState<MomentObj[]>(session?.moments || [])

  const updateSessionsWithCurrent = (session: SessionObj) => {
    changeSessions((prev) =>
      prev.map((c) => (c.id === session.id ? session : c))
    );
  };

  const _sessionHandler: SessionHandler = {
    updateSession: (session: SessionObj) => {
      changeSessionId(session.id);
      changeMoments(session.moments);
      return session;
    },

    addSession: (session: SessionObj) => {
      changeSessionId(session.id);
      changeSessions((prev) => [...prev, session]);
      return session;
    },

    addFileToSession: (file: FileObj) => {
      if (session) {
        const newSession = {
          ...session,
          moments: [
            ...session.moments,
            {
              ...flowTable.session.moment.example,
              file: file,
            },
          ],
        };
        updateSessionsWithCurrent(newSession);
        return newSession;
      }
    },
  };

  const _momentHandler = {
    updateMoment: (i: number, data: any) => {
      changeMoments((prev: any[]) => prev.map((o: any, j: number) => (j === i ? { ...o, ...data } : o))
      );
    },
    addMoment: (moment: MomentObj) => {
        changeMoments(prev => [moment, ...prev])
        return moment
    }
  } 

  return {
    moments,
    sessionId,
    sessions,
    _sessionHandler,
    _momentHandler,
  };
};
