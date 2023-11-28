import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";
import { VisibleElementDoc } from "../interface";

export interface CaptionTimingsField {
    text: string;
    timing: TimeVectorField
}

export interface CaptionElementDoc extends VisibleElementDoc {
    captionTimings: CaptionTimingsField[];
    custom: boolean;
    text: string;
    element: ObjectIdField;
    style: ObjectIdField;
    typography: string;
    textColor: string;
    backgroundColor: string;
}