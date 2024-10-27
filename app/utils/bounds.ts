import {
  FileElement,
  FileElementVariant,
} from '@/server/model/elements/file/main';
import {
  TextElement,
  TextElementVariant,
} from '@/server/model/elements/text/main';
import {
  UrlElement,
  UrlElementVariant,
} from '@/server/model/elements/url/main';

export async function getFileIdeaBounds(file: FileElement) {
  if (file.id === undefined) {
    return { width: 150, height: 150 };
  }

  let width = 150;
  let height = 150;

  if (file.variant === FileElementVariant.IMAGE) {
    width = 150;
    height = 150;
  } else if (file.variant === FileElementVariant.VIDEO) {
    width = 150;
    height = 100;
  } else if (file.variant === FileElementVariant.AUDIO) {
    width = 150;
    height = 150;
  } else if (file.variant === FileElementVariant.PDF) {
    width = 400;
    height = 400;
  }

  return { width, height };
}

export async function getUrlIdeaBounds(file: UrlElement) {
  if (file.id === undefined) {
    return { width: 150, height: 150 };
  }

  let width = 150;
  let height = 150;

  if (file.variant === UrlElementVariant.SPOTIFY) {
    width = 300;
    height = 80;
  } else if (file.variant === UrlElementVariant.YOUTUBE) {
    width = 400;
    height = 225;
  } else if (file.variant === UrlElementVariant.WEBSITE) {
    width = 150;
    height = 50;
  }

  return { width, height };
}

export async function getTextIdeaBounds(file: TextElement) {
  if (file.id === undefined) {
    return { width: 150, height: 150 };
  }

  let width = 150;
  let height = 150;

  if (file.variant === TextElementVariant.STICKY) {
    width = 200;
    height = 200;
  } else if (file.variant === TextElementVariant.ARTICLE) {
    width = 350;
    height = 250;
  }

  return { width, height };
}
