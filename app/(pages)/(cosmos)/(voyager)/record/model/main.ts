import { Piece, examplePiece, examplePieces } from "./piece/main";

export const piecesModel: {
  pieces: {
    piece: {
      example: Piece;
    };
    example: Piece[];
  };
} = {
  pieces: {
    piece: {
      example: examplePiece,
    },
    example: examplePieces,
  },
};
