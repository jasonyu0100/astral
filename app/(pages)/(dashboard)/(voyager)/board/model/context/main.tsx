import { BoardMediaObj } from "./media/main";

export interface BoardContextObj {
  library: BoardMediaObj[];
}

export const exampleBoardLibrary: BoardMediaObj[] = [
  {
    src: "/apollo/board/elements/1.png",
    name: "Sunset",
    description: "A brilliant sunset",
  },
  {
    src: "/apollo/board/elements/2.png",
    name: "Valley",
    description: "A brilliant valley",
  },
  {
    src: "/apollo/board/elements/3.png",
    name: "Field",
    description: "A brilliant field",
  },
  {
    src: "/apollo/board/elements/4.png",
    name: "Lake",
    description: "A brilliant lake",
  },
  {
    src: "/apollo/board/elements/5.png",
    name: "Ocean",
    description: "A brilliant ocean",
  },
  {
    src: "/apollo/board/elements/6.png",
    name: "Morning",
    description: "A brilliant morning",
  },
];

