import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { VisibleComponentDoc } from "../interface";

export interface ClosingComponentDoc extends VisibleComponentDoc {
    resource: ObjectIdField
}