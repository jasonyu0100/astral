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
  point: {
    constellation: {
      star: {
        example: DraftStarObj;
      };
      example: DraftStarObj[];
    };
    example: DraftPointObj;
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
  point: {
    constellation: {
      star: {
        example: exampleDraftStar,
      },
      example: exampleDraftConstellation,
    },
    example: exampleDraftPoint,
  },
};
