import { FlowContextObj } from "./context/main";
import {
  FlowSnapshotObj,
  exampleFlowGallery,
  exampleFlowSnapshot,
} from "./context/snapshot/main";
import {
  FlowMomentObj,
  exampleFlowMoments,
  exampleFlowMoment,
} from "./point/moment/main";
import { FlowPointObj, exampleFlowPoint } from "./point/main";

export const flowModel: {
  context: {
    gallery: {
      snapshot: {
        example: FlowSnapshotObj;
      };
      example: FlowSnapshotObj[];
    };
    example: FlowContextObj;
  };
  points: {
    point: {
      timeline: {
        moment: {
          snapshots: {
            snapshot: {
              example: FlowSnapshotObj;
            };
            example: FlowSnapshotObj[];
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
      timeline: {
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
