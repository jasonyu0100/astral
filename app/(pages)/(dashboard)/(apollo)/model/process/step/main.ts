import { draftModel } from "../../../draft/model/main";
import { DraftPointObj } from "../../../draft/model/point/main";
import { flowModel } from "../../../flow/model/main";
import { FlowPointObj } from "../../../flow/model/point/main";
import { seaModal } from "../../../sea/model/main";
import { SeaPointObj } from "../../../sea/model/point/main";
import { stormModel } from "../../../storm/model/main";
import { StormPointObj } from "../../../storm/model/point/main";

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
        stormPoint: stormModel.point.example,
        draftPoint: draftModel.point.example,
        flowPoint: flowModel.point.example,
        seaPoint: seaModal.point.example,
    }
}

export const exampleProcessSteps = [exampleProcessStep];