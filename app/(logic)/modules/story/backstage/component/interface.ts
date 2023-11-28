import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";

export interface ComponentDoc {
    _id: ObjectIdField;
    storyTiming: TimeVectorField;
    template: boolean;
}

export interface InvisibleComponentDoc extends ComponentDoc {

}

export interface VisibleComponentDoc extends ComponentDoc {
    position: PositionVectorField;
    size: SizeVectorField;
}