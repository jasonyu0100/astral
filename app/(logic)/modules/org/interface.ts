import { ObjectIdField } from "../common/meta/id/interface";
import { UserDoc } from "../user/interface";
import { OrgFileDoc } from "./file/interface";
import { GroupDoc } from "./group/interface";

export interface OrgMetaDataField {
    timeMetaData: TimeMetaDataField;
}
export interface OrgDoc {
    _id: ObjectIdField;
    name: string;
    owner: UserDoc | ObjectIdField;
    members: ObjectIdField[] | UserDoc[];
    groups: ObjectIdField[] | GroupDoc[];
    metaData: OrgMetaDataField;
}