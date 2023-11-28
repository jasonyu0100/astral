import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { VisibleElementDoc } from "../interface";

export interface PicElementDoc extends VisibleElementDoc {
    resource: ObjectIdField;
}
    