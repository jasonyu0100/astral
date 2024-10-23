import { FileElem, FileElemVariant } from '@/(server)/model/elements/file/main';
import { TextElem, TextElemVariant } from '@/(server)/model/elements/text/main';
import { UrlElem, UrlElemVariant } from '@/(server)/model/elements/url/main';

export async function getFileIdeaBounds(file: FileElem) {
  if (file.id === undefined) {
    return { width: 150, height: 150 };
  }

  let width = 150;
  let height = 150;

  if (file.variant === FileElemVariant.IMAGE) {
    width = 150;
    height = 150;
  } else if (file.variant === FileElemVariant.VIDEO) {
    width = 150;
    height = 100;
  } else if (file.variant === FileElemVariant.AUDIO) {
    width = 150;
    height = 150;
  } else if (file.variant === FileElemVariant.PDF) {
    width = 400;
    height = 400;
  }

  return { width, height };
}

export async function getUrlIdeaBounds(file: UrlElem) {
  if (file.id === undefined) {
    return { width: 150, height: 150 };
  }

  let width = 150;
  let height = 150;

  if (file.variant === UrlElemVariant.SPOTIFY) {
    width = 300;
    height = 80;
  } else if (file.variant === UrlElemVariant.YOUTUBE) {
    width = 400;
    height = 225;
  } else if (file.variant === UrlElemVariant.WEBSITE) {
    width = 150;
    height = 50;
  }

  return { width, height };
}

export async function getTextIdeaBounds(file: TextElem) {
  if (file.id === undefined) {
    return { width: 150, height: 150 };
  }

  let width = 150;
  let height = 150;

  if (file.variant === TextElemVariant.STICKY) {
    width = 150;
    height = 150;
  }

  return { width, height };
}
