import { ObjectIdField } from "../common/meta/id/interface";
import { BackstageDoc } from "./backstage/interface";
import { FrontstageDoc } from "./frontstage/interface";
import { OwnershipField } from "../common/ownership/interface";
import { LandDoc } from "../land/interface";

export interface StoryMetaDataField {
    timeMetaData: TimeMetaDataField;
}

export interface StoryAnalyticsDoc {
    _id: ObjectIdField;
}
export interface StoryDoc {
    _id: ObjectIdField;
    title: string;
    ownership: OwnershipField;
    land: ObjectIdField | LandDoc;
    frontstage: ObjectIdField | FrontstageDoc;
    backstage: ObjectIdField | BackstageDoc;
    analytics: StoryAnalyticsDoc;
    metaData: StoryMetaDataField;
}