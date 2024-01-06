export interface Piece {
  title: string;
  type: string;
  date: string;
  thumbnail: {
    src: string;
  };
}

export const examplePiece = {
  title: "Hello World",
  type: "Music",
  date: new Date("2023-12-19").toISOString(),
  thumbnail: {
    src: "/voyager/pieces/1.png",
  },
};

export const examplePieces: Piece[] = [examplePiece];