import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { SceneSettingsField } from "./settings/interface"
import { ElementDoc } from "./element/interface";


export interface SceneAnalyticsDoc {
    _id: ObjectIdField;
}
export interface SceneDoc {
    _id: ObjectIdField;
    name: string;
    layout: string;
    settings: SceneSettingsField;
    elements: ObjectIdField[] | ElementDoc[];
    template: boolean;
    analytics?: SceneAnalyticsDoc;
}