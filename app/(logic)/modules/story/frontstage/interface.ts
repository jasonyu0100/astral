import { ObjectIdField } from "../../common/meta/id/interface";
import { SceneDoc } from "./scene/interface";

export interface FrontstageDoc {
    _id: ObjectIdField;
    scenes: ObjectIdField[] | SceneDoc[];
    template: boolean;
}