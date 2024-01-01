import { DraftContextObj } from "../../../draft/model/context/main";
import { draftModel } from "../../../draft/model/main";
import { FlowContextObj } from "../../../flow/model/context/main";
import { flowModel } from "../../../flow/model/main";
import { SeaContextObj } from "../../../sea/model/context/main";
import { seaModal } from "../../../sea/model/main";
import { StormContextObj } from "../../../storm/model/context/main";
import { stormModel } from "../../../storm/model/main";

export interface ProcessContextObj {
  stormContext: StormContextObj;
  draftContext: DraftContextObj;
  flowContext: FlowContextObj;
  seaContext: SeaContextObj;
}

export const exampleProcessContext = {
  stormContext: stormModel.context.example,
  draftContext: draftModel.context.example,
  flowContext: flowModel.context.example,
  seaContext: seaModal.context.example,
};