import { ObjectIdField } from "../../../../common/meta/id/interface";
import { BackgroundComponentDoc } from "../../../../story/backstage/component/background/interface";
import { ClosingComponentDoc } from "../../../../story/backstage/component/closing/interface";
import { ComponentDoc } from "../../../../story/backstage/component/interface";
import { MusicComponentDoc } from "../../../../story/backstage/component/music/interface";
import { WatermarkComponentDoc } from "../../../../story/backstage/component/watermark/interface";

export interface StyleAssetsField {
    openingComponents: ObjectIdField[] | ComponentDoc[];
    closingComponents: ObjectIdField[] | ClosingComponentDoc[];
    watermarkComponents: ObjectIdField[] | WatermarkComponentDoc[];
    musicComponents: ObjectIdField[] | MusicComponentDoc[];
    backgroundComponents: ObjectIdField[] | BackgroundComponentDoc[];
    assets: ObjectIdField[];
}