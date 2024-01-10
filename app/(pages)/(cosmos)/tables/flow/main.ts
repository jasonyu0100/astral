import { SessionObj, exampleSessions } from "./session/main";

export interface FlowObj {
  id: string;
  sessions: SessionObj[];
}

export const exampleFlow: FlowObj = {
  id: "0",
  sessions: exampleSessions,
};

export const exampleFlows: FlowObj[] = [
  {
    id: "0",
    sessions: exampleSessions,
  },
  {
    id: "1",
    sessions: exampleSessions,
  },
];
