import { ObjectIdField } from "../../../common/meta/id/interface";
import { OwnershipField } from "../../../common/ownership/interface";
import { StyleAssetsField } from "./assets/interface";
import { StyleColorsField } from "./colors/interface";
import { StyleTypographyField } from "./typography/interface";

export interface StyleDoc {
    _id: ObjectIdField;
    name: string;
    ownership: OwnershipField;
    colors: StyleColorsField;
    typography: StyleTypographyField;
    assets: StyleAssetsField;
}