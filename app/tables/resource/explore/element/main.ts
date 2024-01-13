import { FileObj, exampleFile } from "../../../file/main";

export interface ExploreElementObj {
  id: string;
  x: number;
  y: number;
  file: FileObj;
}

export const exampleExploreElement: ExploreElementObj = {
  id: "0",
  x: 120,
  y: 120,
  file: exampleFile,
};

export const exampleExploreElements: ExploreElementObj[] = [
  {
    id: "0",
    x: 120,
    y: 120,
  file: exampleFile,
  },
  {
    id: "1",
    x: 240,
    y: 120,
  file: exampleFile,
  },
  {
    id: "2",
    x: 360,
    y: 120,
  file: exampleFile,
  },
];

