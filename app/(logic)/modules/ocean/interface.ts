import { ObjectIdField } from "../common/meta/id/interface";
import { UserDoc } from "../user/interface";
import { FileDropDoc } from "./drop/file/interface";

export interface OceanMetaDataField {
    timeMetaData: TimeMetaDataField
}

export interface OceanDoc {
    name: string;
    user: ObjectIdField | UserDoc;
    dropFiles: FileDropDoc[] | ObjectIdField[];
    metaData: OceanMetaDataField;
}