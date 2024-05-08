import { createContext } from "react";

export enum PartVariant {
  VISUAL = 'VISUAL',
  AUDIO = 'AUDIO',
  MEMO = 'MEMO',
  LINK = 'LINK',
}

export interface PartObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  variant: string;
}

export const examplePart: PartObj = {
  id: '0',
  chapterId: '0',
  title: 'Idea Part',
  description: 'Part Description',
  variant: PartVariant.VISUAL,
};


export const PartContext = createContext<PartObj>({} as PartObj);

export const exampleParts: PartObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'Idea Part 1',
    description: 'Part Description',
    variant: PartVariant.VISUAL,
  },
  {
    id: '1',
    chapterId: '0',
    title: 'Idea Part 2',
    description: 'Part Description',
    variant: PartVariant.VISUAL,
  },
  {
    id: '2',
    chapterId: '0',
    title: 'Idea Part 3',
    description: 'Part Description',
    variant: PartVariant.VISUAL,
  },
];
