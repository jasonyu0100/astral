import { BoardStarObj, exampleBoardConstellation } from "./star/main";

export interface BoardPointObj {
  constellation: BoardStarObj[];
}

export const exampleBoardPoint = {
  constellation: exampleBoardConstellation
}