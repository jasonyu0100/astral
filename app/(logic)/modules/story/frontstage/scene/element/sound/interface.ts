import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { InvisibleElementDoc } from "../interface";

export interface SoundElementDoc extends InvisibleElementDoc {
    resource: ObjectIdField;
}