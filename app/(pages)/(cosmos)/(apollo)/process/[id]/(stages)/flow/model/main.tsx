import { FlowContextObj } from "./context/main";
import {
  exampleFlowGallery,
  exampleFlowSnapshot,
} from "./context/snapshot/main";
import {
  FlowMomentObj,
  exampleFlowMoments,
  exampleFlowMoment,
} from "./point/moment/main";
import { FlowPointObj, exampleFlowPoint } from "./point/main";
import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/type";

export const flowModel: {
  context: {
    gallery: {
      snapshot: {
        example: CraftFile;
      };
      example: CraftFile[];
    };
    example: FlowContextObj;
  };
  points: {
    point: {
      moments: {
        moment: {
          snapshots: {
            snapshot: {
              example: CraftFile;
            };
            example: CraftFile[];
          };
          example: FlowMomentObj;
        };
        example: FlowMomentObj[];
      };
      example: FlowPointObj;
    };
    example: FlowPointObj[];
  };
} = {
  context: {
    gallery: {
      snapshot: {
        example: exampleFlowSnapshot,
      },
      example: exampleFlowGallery,
    },
    example: {
      gallery: exampleFlowGallery,
    },
  },
  points: {
    point: {
      moments: {
        moment: {
          snapshots: {
            snapshot: {
              example: exampleFlowSnapshot,
            },
            example: exampleFlowGallery,
          },
          example: exampleFlowMoment,
        },
        example: exampleFlowMoments,
      },
      example: exampleFlowPoint,
    },
    example: [exampleFlowPoint]
  },
};
