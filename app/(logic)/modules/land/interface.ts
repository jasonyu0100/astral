import { ObjectIdField } from "../common/meta/id/interface";
import { UserDoc } from "../user/interface";
import { DraftResourcesField } from "./resource/draft/interface";
import { FileResourceDoc } from "./resource/file/interface";

export interface LandMetaDataField {
    timeMetaData: TimeMetaDataField;
}

export interface LandDoc {
    _id: ObjectIdField;
    name: string;
    user: ObjectIdField | UserDoc;
    draftResources: DraftResourcesField;
    fileResources: ObjectIdField[] | FileResourceDoc[];
    metaData:LandMetaDataField;
}