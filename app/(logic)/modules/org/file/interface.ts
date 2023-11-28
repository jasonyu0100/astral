import { OwnershipField } from "@/(logic)/modules/common/ownership/interface";

export interface OrgFileMetaDataField {
    mimeType: string;
    fileSize: number;
    ownership: OwnershipField;
    tags: string[];
    timeMetaData: TimeMetaDataField;
}

export interface OrgFileDoc {
    name: string;
    url: string;
    metaData: OrgFileMetaDataField;
}