import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { ResourceDoc } from "@/(core)/modules/sector/planet/land/resource/interface";

export interface RecordingSliceAnalyticsDoc {
    _id: ObjectIdField;
}

export interface RecordingSliceField {
    _id: ObjectIdField;
    resource: ResourceDoc;
    timing: TimeVectorField;
    analytics?: RecordingSliceAnalyticsDoc;
}