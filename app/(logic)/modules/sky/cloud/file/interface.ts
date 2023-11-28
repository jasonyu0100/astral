export interface FileCloudMetaDataField {
    mimeType: string;
    fileSize: number;
    ownership: string;
    tags: string[];
    timeMetaData: TimeMetaDataField;
}

export interface FileCloudDoc {
    name: string;
    url: string;
    metaData: FileCloudMetaDataField;
}