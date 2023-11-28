import { ObjectIdField } from "../../../../common/meta/id/interface";
import { StoryDoc } from "../../../../story/interface";
import { UserDoc } from "../../../../user/interface";
import { ScriptSliceDoc } from "./slice/interface";

export interface ScriptMetaDataField {
    timeMetaData: TimeMetaDataField;
}
export interface ScriptAnalyticsDoc {
    _id: ObjectIdField;
}

export interface ScriptDoc {
    _id: ObjectIdField;
    user: ObjectIdField | UserDoc;
    title: string;
    text: string;
    slices: ObjectIdField[] | ScriptSliceDoc[];
    metaData: ScriptMetaDataField;
    story?: ObjectIdField | StoryDoc;
    analytics?: ScriptAnalyticsDoc;
}