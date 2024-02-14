import { createContext } from "react";

export enum FileVariant {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  TXT = 'TXT',
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

export const FileContext = createContext<FileObj>({} as FileObj);

export const exampleFile: FileObj = {
  id: '0',
  title: 'passion.png',
  size: 0,
  src: `/voyager/drive/themes/symbols/passion.png`,
  fileType: 'image/png',
  variant: FileVariant.IMAGE,
};

export const exampleProfileImageFile: FileObj = {
  id: '0',
  title: 'avatar.png',
  size: 0,
  src: `/brand/avatar.png`,
  fileType: 'image/png',
  variant: FileVariant.IMAGE,
};

export const exampleFiles: FileObj[] = [
  {
    id: '0',
    title: 'passion.png',
    size: 0,
    src: `/voyager/drive/themes/symbols/passion.png`,
    fileType: 'image/png',
    variant: FileVariant.IMAGE,
  },
  {
    id: '1',
    title: 'nature.png',
    size: 0,
    src: `/voyager/drive/themes/symbols/nature.png`,
    fileType: 'image/png',
    variant: FileVariant.IMAGE,
  },
  {
    id: '2',
    title: 'launch.png',
    size: 0,
    src: `/voyager/drive/themes/symbols/launch.png`,
    fileType: 'image/png',
    variant: FileVariant.IMAGE,
  },
];
