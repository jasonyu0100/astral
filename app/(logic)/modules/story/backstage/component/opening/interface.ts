import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { VisibleComponentDoc } from "../interface";

export interface OpeningComponentDoc extends VisibleComponentDoc {
    resource: ObjectIdField
}