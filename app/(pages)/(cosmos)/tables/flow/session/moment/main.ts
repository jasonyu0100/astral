import { FileObj, exampleFile } from "../../../collection/file/main";

export interface MomentObj {
  id: string;
  title: string;
  time: string;
  description: string;
  file: FileObj;
}

export const exampleMoment: MomentObj = {
  id: "0",
  title: "Moment Example",
  time: new Date("2023-12-19").toISOString(),
  description: "Moment Description Example",
  file: exampleFile,
};

export const exampleMoments: MomentObj[] = [
  {
    id: "0",
    title: "Moment Example 1",
    time: new Date("2023-12-19").toISOString(),
    description: "Moment Description Example",
    file: exampleFile,
  },
  {
    id: "1",
    title: "Moment Example 2",
    time: new Date("2023-12-19").toISOString(),
    description: "Moment Description Example",
    file: exampleFile,
  },
];
