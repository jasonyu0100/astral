import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";

export interface ScriptSliceAnalyticsDoc {
    _id: ObjectIdField;
}

export interface ScriptSliceDoc {
    _id: ObjectIdField,
    text: string,
    analytics?: ScriptSliceAnalyticsDoc
}