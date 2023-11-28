import { ObjectIdField } from "../../../common/meta/id/interface";

export interface QuestDoc {
    _id: ObjectIdField;
    story: ObjectIdField;
    action: string;
}