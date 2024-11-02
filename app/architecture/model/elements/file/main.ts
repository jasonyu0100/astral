import { createContext } from 'react';
import { ModelInterface } from '../../main';

export enum FileElementVariant {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  PDF = 'PDF',
  ANY = 'ANY',
}

export interface FileElement {
  id: string;
  src: string;
  ext: string;
  title: string;
  size: number;
  variant: string;
}

export const fileElementGql = `
type FileElem {
  id: String!
  src: String
  ext: String
  title: String
  size: Int
  variant: String
}
`;

export const ContextForFileElement = createContext<FileElement>(
  {} as FileElement,
);

export const exampleFileElement: FileElement = {
  id: '0',
  title: 'vinyl.png',
  size: 0,
  src: `/stock/vinyl.png`,
  ext: 'image/png',
  variant: FileElementVariant.IMAGE,
};

export const exampleDisplayPictureFileElement: FileElement = {
  id: '0',
  title: 'avatar',
  size: 0,
  src: `/brand/display-picture-astral.png`,
  ext: 'image/png',
  variant: FileElementVariant.IMAGE,
};

export const exampleFileElements: FileElement[] = [
  {
    id: '0',
    title: 'vinyl',
    size: 0,
    src: `/stock/vinyl.png`,
    ext: 'image/png',
    variant: FileElementVariant.IMAGE,
  },
  {
    id: '0',
    title: 'passion',
    size: 0,
    src: `/stock/passion.png`,
    ext: 'image/png',
    variant: FileElementVariant.IMAGE,
  },
  {
    id: '1',
    title: 'nature',
    size: 0,
    src: `/stock/nature.png`,
    ext: 'image/png',
    variant: FileElementVariant.IMAGE,
  },
  {
    id: '2',
    title: 'launch',
    size: 0,
    src: `/stock/launch.png`,
    ext: 'image/png',
    variant: FileElementVariant.IMAGE,
  },
  {
    id: '3',
    title: 'personal',
    size: 0,
    src: `/stock/personal.png`,
    ext: 'image/png',
    variant: FileElementVariant.IMAGE,
  },
];

export const fileElementModel: ModelInterface<FileElement> = {
  name: 'file',
  example: exampleFileElement,
  examples: exampleFileElements,
  gql: fileElementGql,
  children: [],
  parentKey: '',
};

export function getFileAccepts(variant: FileElementVariant) {
  switch (variant) {
    case FileElementVariant.IMAGE:
      return 'image/*';
    case FileElementVariant.VIDEO:
      return 'video/*';
    case FileElementVariant.AUDIO:
      return 'audio/*';
    default:
      return '*';
  }
}

export function getFileVariantFromMimeType(
  mimeType: string,
): FileElementVariant {
  if (mimeType.includes('image')) {
    return FileElementVariant.IMAGE;
  }
  if (mimeType.includes('video')) {
    return FileElementVariant.VIDEO;
  }
  if (mimeType.includes('audio')) {
    return FileElementVariant.AUDIO;
  }
  if (mimeType.includes('text')) {
    return FileElementVariant.IMAGE;
  }
  if (mimeType.includes('application/pdf')) {
    return FileElementVariant.PDF;
  }
  return FileElementVariant.IMAGE;
}
