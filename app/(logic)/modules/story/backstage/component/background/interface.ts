import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { VisibleComponentDoc } from "../interface";

export interface BackgroundComponentDoc extends VisibleComponentDoc {
    resource: ObjectIdField
}