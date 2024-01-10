import { FileObj, exampleFile } from "../../../collection/file/main";

export interface Moment {
  title: string;
  time: string;
  description: string;
  file: FileObj;
}

export const exampleMoment: Moment = {
  title: "Moment Example",
  time: new Date("2023-12-19").toISOString(),
  description: "Moment Description Example",
  file: exampleFile,
};

export const exampleMoments: Moment[] = [
    {
      title: "Moment Example 1",
      time: new Date("2023-12-19").toISOString(),
      description: "Moment Description Example",
      file: exampleFile,
    },
    {
      title: "Moment Example 2",
      time: new Date("2023-12-19").toISOString(),
      description: "Moment Description Example",
      file: exampleFile,
    },
];
