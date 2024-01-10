import { FileObj, exampleFile } from "@/(pages)/(cosmos)/tables/collection/file/main";

export interface StarObj {
  x: number;
  y: number;
  file: FileObj;
}

export const exampleStar: StarObj = {
  x: 120,
  y: 120,
  file: exampleFile,
};

export const exampleStars: StarObj[] = [
  {
    x: 120,
    y: 120,
    file: exampleFile,
  },
  {
    x: 240,
    y: 120,
    file: exampleFile,
  },
  {
    x: 360,
    y: 120,
    file: exampleFile,
  },
];
