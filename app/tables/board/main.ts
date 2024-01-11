import { PinObj, examplePins } from "./pin/main";

export interface BoardObj {
  id: string;
  pins: PinObj[];
}

export const exampleBoard: BoardObj = {
  id: "0",
  pins: examplePins,
};

export const exampleBoards: BoardObj[] = [
  {
    id: "0",
    pins: examplePins,
  },
  {
    id: "1",
    pins: examplePins,
  },
];
