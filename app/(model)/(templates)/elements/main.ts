// FILE

import { FileElem } from "@/(model)/elements/file/main";
import { LinkElem } from "@/(model)/elements/link/main";
import { LogElem } from "@/(model)/elements/log/main";
import { NoteElem } from "@/(model)/elements/note/main";
import { ScoreElem } from "@/(model)/elements/score/main";
import { templateFileElems } from "./file/main";
import { templateLinkElems } from "./link/main";
import { templateNoteElems } from "./note/main";

export type TemplateFileElem = Omit<FileElem, 'id'>;
export type TemplateFileElems = TemplateFileElem[];

// LINK
export type TemplateLinkElem = Omit<LinkElem, 'id'>;
export type TemplateLinkElems = TemplateLinkElem[];

// NOTE
export type TemplateNoteElem = Omit<NoteElem, 'id'>;
export type TemplateNoteElems = TemplateNoteElem[];

// LOG
export type TemplateLogElem = Omit<LogElem, 'id'>;
export type TemplateLogElems = TemplateLogElem[];

// SCORE
export type TemplateScoreElem = Omit<ScoreElem, 'id'>;
export type TemplateScoreElems = TemplateScoreElem[];

// TEMPLATE

export enum TemplateElemVariant {
    FILE = 'FILE',
    LINK = 'LINK',
    NOTE = 'NOTE',
}

export function getElemTemplates(variant: TemplateElemVariant) {
    switch (variant) {
        case TemplateElemVariant.FILE:
            return templateFileElems;
        case TemplateElemVariant.LINK:
            return templateLinkElems;
        case TemplateElemVariant.NOTE:
            return templateNoteElems;
    }
    return templateFileElems;
}