import { MomentObj, exampleMoments } from "./moment/main";

export interface SessionObj {
  id: string;
  title: string;
  description: string;
  time: string;
  moments: MomentObj[];
}

export const exampleSession: SessionObj = {
  id: "0",
  title: "Session Example",
  description: "Session Description Example",
  time: new Date("2023-12-19").toISOString(),
  moments: exampleMoments,
};

export const exampleSessions: SessionObj[] = [
    {
    id: "0",
    title: "Session Example 0",
    description: "Session Description Example",
    time: new Date("2023-12-19").toISOString(),
    moments: exampleMoments,
    },{
    id: "1",
    title: "Session Example 1",
    description: "Session Description Example",
    time: new Date("2023-12-19").toISOString(),
    moments: exampleMoments,
    }
];
