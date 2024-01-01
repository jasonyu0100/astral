import { BoardContextObj, exampleBoardLibrary } from "./context/main";
import { BoardMediaObj, exampleBoardMedia } from "./context/media/main";
import { BoardPointObj, exampleBoardPoint } from "./point/main";
import {
  BoardStarObj,
  exampleBoardConstellation,
  exampleBoardStar,
} from "./point/star/main";

export const boardModel: {
  context: {
    library: {
      media: {
        example: BoardMediaObj;
      };
      example: BoardMediaObj[];
    };
    example: BoardContextObj;
  };
  point: {
    constellation: {
      star: {
        example: BoardStarObj;
      };
      example: BoardStarObj[];
    };
    example: BoardPointObj;
  };
} = {
  context: {
    library: {
      media: {
        example: exampleBoardMedia,
      },
      example: exampleBoardLibrary,
    },
    example: {
      library: exampleBoardLibrary,
    },
  },
  point: {
    constellation: {
      star: {
        example: exampleBoardStar,
      },
      example: exampleBoardConstellation,
    },
    example: exampleBoardPoint,
  },
};
