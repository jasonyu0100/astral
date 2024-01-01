import { DraftContextObj, exampleDraftLibrary } from "./context/main";
import { DraftMediaObj, exampleDraftMedia } from "./context/media/main";
import { DraftPointObj, exampleDraftPoint } from "./point/main";
import {
  DraftStarObj,
  exampleDraftConstellation,
  exampleDraftStar,
} from "./point/star/main";

export const draftModel: {
  context: {
    library: {
      media: {
        example: DraftMediaObj;
      };
      example: DraftMediaObj[];
    };
    example: DraftContextObj;
  };
  points: {
    point: {
      constellation: {
        star: {
          example: DraftStarObj;
        };
        example: DraftStarObj[];
      };
      example: DraftPointObj;
    };
    example: DraftPointObj[];
  };
} = {
  context: {
    library: {
      media: {
        example: exampleDraftMedia,
      },
      example: exampleDraftLibrary,
    },
    example: {
      library: exampleDraftLibrary,
    },
  },
  points: {
    point: {
      constellation: {
        star: {
          example: exampleDraftStar,
        },
        example: exampleDraftConstellation,
      },
      example: exampleDraftPoint,
    },
    example: [exampleDraftPoint],
  },
};
