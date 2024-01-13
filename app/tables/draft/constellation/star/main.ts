import { FileObj, exampleFile } from "@/tables/file/main";

export interface StarObj {
  id: string;
  x: number;
  y: number;
  file: FileObj;
}

export const exampleStar: StarObj = {
  id: "0",
  x: 120,
  y: 120,
  file: exampleFile,
};

export const exampleStars: StarObj[] = [
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
