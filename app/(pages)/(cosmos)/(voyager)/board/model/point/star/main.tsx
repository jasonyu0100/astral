import { BoardMediaObj, exampleBoardMedia } from "../../context/media/main";

export interface BoardStarObj {
  x: number;
  y: number;
  element: BoardMediaObj;
}

export const exampleBoardStar: BoardStarObj = {
  x: 120,
  y: 120,
  element: exampleBoardMedia,
};

export const exampleBoardConstellation: BoardStarObj[] = [
  {
    x: 120,
    y: 120,
    element: exampleBoardMedia,
  },
  {
    x: 240,
    y: 120,
    element: exampleBoardMedia,
  },
  {
    x: 360,
    y: 120,
    element: exampleBoardMedia,
  },
];
