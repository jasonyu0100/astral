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
import { FlowPointObj, exampleFlowTimeline } from "./point/main";

export const flowModel: {
  context: {
    gallery: {
      snapshot: FlowSnapshotObj;
      example: FlowSnapshotObj[];
    };
    example: FlowContextObj;
  };
  point: {
    timeline: {
      moment: {
        snapshots: {
          snapshot: FlowSnapshotObj;
          example: FlowSnapshotObj[];
        };
        example: FlowMomentObj;
      };
      example: FlowMomentObj[];
    };
    example: FlowPointObj;
  };
} = {
  context: {
    gallery: {
      snapshot: exampleFlowSnapshot,
      example: exampleFlowGallery,
    },
    example: {
      gallery: exampleFlowGallery,
    },
  },
  point: {
    timeline: {
      moment: {
        snapshots: {
          snapshot: exampleFlowSnapshot,
          example: exampleFlowGallery,
        },
        example: exampleFlowMoment,
      },
      example: exampleFlowMoments,
    },
    example: {
      timeline: exampleFlowTimeline,
    },
  },
};
