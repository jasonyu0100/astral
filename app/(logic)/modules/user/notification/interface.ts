import { ObjectIdField } from "../../common/meta/id/interface";

export interface NotificationDoc {
    _id: ObjectIdField;
    endpoint: string;
    description: string;
    metaData: TimeMetaDataField;
}