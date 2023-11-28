import { ObjectIdField } from "../../common/meta/id/interface";
import { OwnershipField } from "../../common/ownership/interface";
import { LandDoc } from "../../land/interface";
import { OceanDoc } from "../../ocean/interface";
import { SkyDoc } from "../../sky/interface";

export interface PlanetMetaDataField {
    timeMetaData: TimeMetaDataField;
}

export interface PlanetDoc {
    _id: ObjectIdField;
    name: string;
    month: number;
    land: ObjectIdField | LandDoc;
    ocean: ObjectIdField | OceanDoc;
    sky: ObjectIdField | SkyDoc
    ownership: OwnershipField;
    metaData: PlanetMetaDataField;
}