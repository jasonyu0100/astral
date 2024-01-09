import { Piece } from "./type";

export const examplePiece : Piece = {
  title: "Hello World",
  type: "Music",
  date: new Date("2023-12-19").toISOString(),
  thumbnail: {
    src: "/voyager/pieces/1.png",
  },
};

export const examplePieces: Piece[] = [examplePiece];