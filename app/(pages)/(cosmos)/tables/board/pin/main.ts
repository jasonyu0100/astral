import { FileObj, exampleFile } from "../../collection/file/main";

export interface PinObj {
  x: number;
  y: number;
  file: FileObj;
}

export const examplePin: PinObj = {
  x: 120,
  y: 120,
  file: exampleFile,
};

export const examplePins: PinObj[] = [
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
