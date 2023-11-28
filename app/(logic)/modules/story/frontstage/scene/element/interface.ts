import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";

export interface ElementDoc {
    _id: ObjectIdField;
    timing: TimeVectorField;
    template: boolean;
}

export interface InvisibleElementDoc extends ElementDoc {

}

export interface VisibleElementDoc extends ElementDoc {
    position: PositionVectorField;
    size: SizeVectorField
}