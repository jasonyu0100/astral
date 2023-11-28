import { ObjectIdField } from "../common/meta/id/interface";
import { StoryDoc } from "../story/interface";
import { UserDoc } from "../user/interface";
import { FileCloudDoc } from "./cloud/file/interface";
import { QuestDoc } from "./cloud/quest/interface";

export interface SkyMetaData {
    timeMetaData: TimeMetaDataField;
}

export interface SkyDoc {
    _id: ObjectIdField;
    name: string;
    user: UserDoc | ObjectIdField;
    fileClouds: FileCloudDoc;
    questClouds: QuestDoc;
    storyClouds: StoryDoc;
    metaData: SkyMetaData;
}