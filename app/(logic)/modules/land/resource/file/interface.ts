import { OwnershipField } from "@/(logic)/modules/common/ownership/interface";

export interface FileResourceMetaDataField {
    mimeType: string;
    fileSize: number;
    ownership: OwnershipField;
    tags: string[];
    timeMetaData: TimeMetaDataField;
}

export interface FileResourceDoc {
    name: string;
    url: string;
    metaData: FileResourceMetaDataField;
}