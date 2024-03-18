import { createContext } from 'react';

export enum FileVariant {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  TXT = 'TXT',
  ANY = 'ANY',
}

export function getFileAccepts(variant: FileVariant) {
  switch (variant) {
    case FileVariant.IMAGE:
      return 'image/*';
    case FileVariant.VIDEO:
      return 'video/*';
    case FileVariant.AUDIO:
      return 'audio/*';
    case FileVariant.TXT:
      return '.txt';
    default:
      return '*';
  }
}

export function getFileVariantFromMimeType(mimeType: string): FileVariant {
  if (mimeType.includes('image')) {
    return FileVariant.IMAGE;
  }
  if (mimeType.includes('video')) {
    return FileVariant.VIDEO;
  }
  if (mimeType.includes('audio')) {
    return FileVariant.AUDIO;
  }
  if (mimeType.includes('text')) {
    return FileVariant.TXT;
  }
  return FileVariant.TXT;
}

export interface FileObj {
  id: string;
  src: string;
  fileType: string;
  title: string;
  size: number;
  variant: string;
}

export const FileObjContext = createContext<FileObj>({} as FileObj);

export const exampleFile: FileObj = {
  id: '0',
  title: 'passion.png',
  size: 0,
  src: `/voyager/passion.png`,
  fileType: 'image/png',
  variant: FileVariant.IMAGE,
};

export const exampleProfileImageFile: FileObj = {
  id: '0',
  title: 'avatar',
  size: 0,
  src: `/brand/icon-bg-sm.png`,
  fileType: 'image/png',
  variant: FileVariant.IMAGE,
};

export const exampleFiles: FileObj[] = [
  {
    id: '0',
    title: 'passion.png',
    size: 0,
    src: `/voyager/passion.png`,
    fileType: 'image/png',
    variant: FileVariant.IMAGE,
  },
  {
    id: '1',
    title: 'nature.png',
    size: 0,
    src: `/voyager/nature.png`,
    fileType: 'image/png',
    variant: FileVariant.IMAGE,
  },
  {
    id: '2',
    title: 'launch.png',
    size: 0,
    src: `/voyager/launch.png`,
    fileType: 'image/png',
    variant: FileVariant.IMAGE,
  },
];
