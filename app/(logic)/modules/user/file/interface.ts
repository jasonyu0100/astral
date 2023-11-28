import { OwnershipField } from "../../common/ownership/interface";

export interface UserFileMetaData {
    mimeType: string;
    fileSize: number;
    ownership: OwnershipField;
    tags: string[];
    timeMetaData: TimeMetaDataField;
}

export interface UserFileDoc {
    _id: string;
    name: string;
    url: string;
    metaData: UserFileMetaData;
}