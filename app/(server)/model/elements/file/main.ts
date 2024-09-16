import { createContext } from 'react';
import { ModelInterface } from '../../main';

export enum FileElemVariant {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  ANY = 'ANY',
}

export interface FileElem {
  id: string;
  src: string;
  ext: string;
  title: string;
  size: number;
  variant: string;
}

export const fileElemGql = `
type FileElem {
  id: String!
  src: String
  ext: String
  title: String
  size: Int
  variant: String
}

input FileElemInput {
  id: String!
  src: String
  ext: String
  title: String
  size: Int
  variant: String
}
`;

export const ContextForFileElem = createContext<FileElem>({} as FileElem);

export const exampleFileElem: FileElem = {
  id: '0',
  title: 'passion.png',
  size: 0,
  src: `/stock/passion.png`,
  ext: 'image/png',
  variant: FileElemVariant.IMAGE,
};

export const exampleDisplayPictureFileElem: FileElem = {
  id: '0',
  title: 'avatar',
  size: 0,
  src: `/brand/display-picture-astral.png`,
  ext: 'image/png',
  variant: FileElemVariant.IMAGE,
};

export const exampleFileElems: FileElem[] = [
  {
    id: '0',
    title: 'passion',
    size: 0,
    src: `/stock/passion.png`,
    ext: 'image/png',
    variant: FileElemVariant.IMAGE,
  },
  {
    id: '1',
    title: 'nature',
    size: 0,
    src: `/stock/nature.png`,
    ext: 'image/png',
    variant: FileElemVariant.IMAGE,
  },
  {
    id: '2',
    title: 'launch',
    size: 0,
    src: `/stock/launch.png`,
    ext: 'image/png',
    variant: FileElemVariant.IMAGE,
  },
  {
    id: '3',
    title: 'personal',
    size: 0,
    src: `/stock/personal.png`,
    ext: 'image/png',
    variant: FileElemVariant.IMAGE,
  },
];

export const fileElemModel: ModelInterface<FileElem> = {
  name: 'file',
  example: exampleFileElem,
  examples: exampleFileElems,
  gql: fileElemGql,
  children: [],
  parentKey: '',
};

export function getFileAccepts(variant: FileElemVariant) {
  switch (variant) {
    case FileElemVariant.IMAGE:
      return 'image/*';
    case FileElemVariant.VIDEO:
      return 'video/*';
    case FileElemVariant.AUDIO:
      return 'audio/*';
    default:
      return '*';
  }
}

export function getFileVariantFromMimeType(mimeType: string): FileElemVariant {
  if (mimeType.includes('image')) {
    return FileElemVariant.IMAGE;
  }
  if (mimeType.includes('video')) {
    return FileElemVariant.VIDEO;
  }
  if (mimeType.includes('audio')) {
    return FileElemVariant.AUDIO;
  }
  if (mimeType.includes('text')) {
    return FileElemVariant.IMAGE;
  }
  return FileElemVariant.IMAGE;
}
