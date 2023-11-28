import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { VisibleElementDoc } from "../interface";

export interface ClipElementDoc extends VisibleElementDoc {
    resource: ObjectIdField;
}
    