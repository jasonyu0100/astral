import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { ScriptDoc } from "./script/interface";
import { RecordingDoc } from "./recording/interface";

export interface DraftResourcesField {
    scriptDrafts: ScriptDoc[] | ObjectIdField[];
    recordingDrafts: RecordingDoc[] | ObjectIdField[];

}