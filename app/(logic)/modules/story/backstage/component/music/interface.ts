import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { VisibleComponentDoc } from "../interface";

export interface MusicComponentDoc extends VisibleComponentDoc {
    resource: ObjectIdField
}