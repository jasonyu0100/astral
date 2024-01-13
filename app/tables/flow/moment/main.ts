import { FileObj, exampleFile } from "../../resource/file/main";
import { CommentObj, exampleComments } from "./comment/main";

export enum MomentVisibility {
  JOURNAL = "Journal",
  SOCIAL = "Social",
  EXPLORE = "Explore",
  NONE = "None",
}

export const momentSchema = `
enum MomentVisibility {
  JOURNAL
  SOCIAL
  EXPLORE
  NONE
}

type MomentObj {
  id: String!
  spaceId: String!
  userId: String!
  time: String!
  title: String!
  log: String!
  file: FileObj
  visibility: MomentVisibility!
  comments: [CommentObj!]!
}`;
export interface MomentObj {
  id: string;
  spaceId: string;
  userId: string;
  time: string;
  title: string;
  log: string;
  file: FileObj;
  visibility: MomentVisibility;
  comments: CommentObj[];
}

export const exampleMoment: MomentObj = {
  id: "0",
  time: new Date("2023-12-19").toISOString(),
  title: "Moment Title 0",
  log: "Moment Description Example",
  file: exampleFile,
  spaceId: "0",
  userId: "0",
  visibility: MomentVisibility.JOURNAL,
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
    userId: "0",
    visibility: MomentVisibility.JOURNAL,
    comments: exampleComments,
  },
  {
    id: "1",
    time: new Date("2023-12-19").toISOString(),
    title: "Moment Title 1",
    log: "Moment Description Example",
    file: exampleFile,
    spaceId: "0",
    userId: "0",
    visibility: MomentVisibility.JOURNAL,
    comments: exampleComments,
  },
];
