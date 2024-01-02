import { draftModel } from "../../../(stages)/draft/model/main";
import { DraftPointObj } from "../../../(stages)/draft/model/point/main";
import { flowModel } from "../../../(stages)/flow/model/main";
import { FlowPointObj } from "../../../(stages)/flow/model/point/main";
import { seaModal } from "../../../(stages)/sea/model/main";
import { SeaPointObj } from "../../../(stages)/sea/model/point/main";
import { stormModel } from "../../../(stages)/storm/model/main";
import { StormPointObj } from "../../../(stages)/storm/model/point/main";

export interface ProcessStepObj {
  id: number;
  name: string;
  description: string;
  points: {
    stormPoint: StormPointObj;
    draftPoint: DraftPointObj;
    flowPoint: FlowPointObj;
    seaPoint: SeaPointObj;
  };
}

export const exampleProcessStep = {
    id: 0,
    name: "Melody",
    description: "This is a description",
    points: {
        stormPoint: stormModel.points.point.example,
        draftPoint: draftModel.points.point.example,
        flowPoint: flowModel.points.point.example,
        seaPoint: seaModal.points.point.example,
    }
}

export const exampleProcessSteps = [exampleProcessStep];