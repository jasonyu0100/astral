import { FileObj, exampleFile } from "../../collection/file/main";
import { MomentCommentObj, exampleComments } from "./comment/main";

export enum MomentVisibility {
  Journal = "Journal",
  Social = "Social",
  Explore = "Explore",
  None = "None",
}
export interface MomentObj {
  id: string;
  spaceId: string;
  sessionId: string;
  userId: string;
  time: string;
  title: string;
  log: string;
  file: FileObj;
  visibility: MomentVisibility;
  comments: MomentCommentObj[];
}

export const exampleMoment: MomentObj = {
  id: "0",
  time: new Date("2023-12-19").toISOString(),
  title: "Moment Title 0",
  log: "Moment Description Example",
  file: exampleFile,
  spaceId: "0",
  sessionId: "0",
  userId: "0",
  visibility: MomentVisibility.Journal,
  comments: exampleComments,
};

export const exampleMoments: MomentObj[] = [
  {
    id: "0",
    time: new Date("2023-12-19").toISOString(),
    title: "Moment Title 0",
    log: "Moment Description Example",
    file: exampleFile,
    spaceId: "0",
    sessionId: "0",
    userId: "0",
    visibility: MomentVisibility.Journal,
    comments: exampleComments,
  },
  {
    id: "1",
    time: new Date("2023-12-19").toISOString(),
    title: "Moment Title 1",
    log: "Moment Description Example",
    file: exampleFile,
    spaceId: "0",
    sessionId: "0",
    userId: "0",
    visibility: MomentVisibility.Journal,
    comments: exampleComments,
  },
];
