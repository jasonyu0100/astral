import { ObjectIdField } from "../../common/meta/id/interface";
import { UserDoc } from "../../user/interface";

export interface GroupDoc {
    _id: ObjectIdField;
    name: string;
    members: ObjectIdField[] | UserDoc[];
    description: string;
}