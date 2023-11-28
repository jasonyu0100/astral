export interface FileDropMetaDataField {
    mimeType: string;
    fileSize: number;
    ownership: string;
    tags: string[];
    timeMetaData: TimeMetaDataField;
}

export interface FileDropDoc {
    name: string;
    url: string;
    metaData: FileDropMetaDataField;
}