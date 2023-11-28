import { ObjectIdField } from "../../common/meta/id/interface";
import { ComponentDoc } from "./component/interface";

export interface BackstageDoc {
    _id: ObjectIdField;
    template: boolean;
    components: ObjectIdField[] | ComponentDoc[];
}