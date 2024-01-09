import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/type";
import { DraftContextObj, exampleDraftLibrary } from "./context/main";
import { exampleDraftMedia } from "./context/media/main";
import { DraftPointObj, exampleDraftPoint } from "./point/main";
import {
  DraftStarObj,
  exampleDraftStars,
  exampleDraftStar,
} from "./point/star/main";

export const draftModel: {
  context: {
    library: {
      media: {
        example: CraftFile;
      };
      example: CraftFile[];
    };
    example: DraftContextObj;
  };
  points: {
    point: {
      stars: {
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
      stars: {
        star: {
          example: exampleDraftStar,
        },
        example: exampleDraftStars,
      },
      example: exampleDraftPoint,
    },
    example: [exampleDraftPoint],
  },
};
