import { ObjectIdField } from "../common/meta/id/interface";
import { OrgFileDoc } from "../org/file/interface";

export interface UserMetaDataField {
    stripeId?: string;
    timeMetaData: TimeMetaDataField;
}

export interface UserDoc {
    _id: ObjectIdField;
    email: string;
    fName: string;
    lName: string;
    password: string;
    profilePicture?: ObjectIdField | OrgFileDoc;
    metaData: UserMetaDataField;
    token: string;
}