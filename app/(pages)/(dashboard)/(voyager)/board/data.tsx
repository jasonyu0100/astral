export interface VoyagerBoard {
    elements: BoardElement[];
}

export interface BoardElement {
  name?: string;
  description?: string;
  src: string;
}

export const defaultBoardElement: BoardElement = {
  src: "/voyager/board/elements/1.png", name: "Sunset", description: "A brilliant sunset"
};

export const defaultBoardElements: BoardElement[] = [
  { src: "/voyager/board/elements/1.png", name: "Sunset", description: "A brilliant sunset" },
  { src: "/voyager/board/elements/2.png", name: "Valley", description: "A brilliant valley" },
  { src: "/voyager/board/elements/3.png", name: "Field", description: "A brilliant field" },
  { src: "/voyager/board/elements/4.png", name: "Lake", description: "A brilliant lake" },
  { src: "/voyager/board/elements/5.png", name: "Ocean", description: "A brilliant ocean" },
  { src: "/voyager/board/elements/6.png", name: "Morning", description: "A brilliant morning" },
];

export const defaultApolloBoard: VoyagerBoard = {
  elements: defaultBoardElements,
};

//

export interface ConstellationBoard {
  stars: BoardStar[];
}

export interface BoardStar {
  x: number;
  y: number;
  element: BoardElement;
}

export const defaultBoardStar: BoardStar = {
  x: 120,
  y: 120,
  element: defaultBoardElement,
};

export const defaultBoardStars: BoardStar[] = [
  { x: 120, y: 120, element: defaultBoardElement },
  { x: 480, y: 120, element: defaultBoardElement },
  { x: 240, y: 360, element: defaultBoardElement },
];

export const defaultConstellationBoard: ConstellationBoard = {
  stars: defaultBoardStars,
};

