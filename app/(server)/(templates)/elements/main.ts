// FILE

import { FileElem } from '@/(server)/(model)/elements/file/main';
import { TextElem } from '@/(server)/(model)/elements/text/main';
import { UrlElem } from '@/(server)/(model)/elements/url/main';
import { templateFileElems } from './file/main';
import { templateTextElems } from './text/main';
import { templateUrlElems } from './url/main';

export type TemplateFileElem = Omit<FileElem, 'id'>;
export type TemplateFileElems = TemplateFileElem[];

// LINK
export type TemplateUrlElem = Omit<UrlElem, 'id'>;
export type TemplateUrlElems = TemplateUrlElem[];

// NOTE
export type TemplateTextElem = Omit<TextElem, 'id'>;
export type TemplateTextElems = TemplateTextElem[];

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
      return templateUrlElems;
    case TemplateElemVariant.NOTE:
      return templateTextElems;
  }
  return templateFileElems;
}
