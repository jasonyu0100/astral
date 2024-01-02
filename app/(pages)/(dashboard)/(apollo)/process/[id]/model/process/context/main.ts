import { DraftContextObj } from "../../../(stages)/draft/model/context/main";
import { draftModel } from "../../../(stages)/draft/model/main";
import { FlowContextObj } from "../../../(stages)/flow/model/context/main";
import { flowModel } from "../../../(stages)/flow/model/main";
import { SeaContextObj } from "../../../(stages)/sea/model/context/main";
import { seaModal } from "../../../(stages)/sea/model/main";
import { StormContextObj } from "../../../(stages)/storm/model/context/main";
import { stormModel } from "../../../(stages)/storm/model/main";

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