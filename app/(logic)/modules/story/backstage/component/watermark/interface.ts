import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { VisibleComponentDoc } from "../interface";

export interface WatermarkComponentDoc extends VisibleComponentDoc {
    resource: ObjectIdField
}