import { ObjectIdField } from "../common/meta/id/interface";
import { OwnershipField } from "../common/ownership/interface";
import { PlanetDoc } from "./planet/interface";

export interface SectorMetaDataField {
    timeMetaData: TimeMetaDataField;
}

export interface SectorDoc {
    _id: ObjectIdField;
    name: string;
    year: number;
    planets: ObjectIdField[] | PlanetDoc[];
    ownership: OwnershipField;
    metaData: SectorMetaDataField;
}