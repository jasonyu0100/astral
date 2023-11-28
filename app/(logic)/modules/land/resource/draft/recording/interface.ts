import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { ResourceDoc } from "../../../../sector/planet/land/resource/interface";
import { UserDoc } from "../../../../user/interface";
import { RecordingSliceField } from "./slice/interface";
import { StoryDoc } from "../../../../story/interface";

export interface RecordingMetaDataField {
    timeMetaData: TimeMetaDataField;
}

export interface RecordingAnalyticsDoc {
    _id: ObjectIdField;
}

export interface RecordingDoc {
    _id: ObjectIdField;
    user: ObjectIdField | UserDoc;
    title: string;
    resource: ObjectIdField | ResourceDoc;
    timing: TimeVectorField;
    slices: ObjectIdField[] | RecordingSliceField[];
    metaData: RecordingMetaDataField;
    analytics?: RecordingAnalyticsDoc;
    story?: ObjectIdField | StoryDoc;
}