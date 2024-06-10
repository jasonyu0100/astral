// FILE

import { FileElem } from "@/(server)/(model)/elements/file/main";
import { LinkElem } from "@/(server)/(model)/elements/link/main";
import { NoteElem } from "@/(server)/(model)/elements/note/main";
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