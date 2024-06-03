import { createContext } from "react";

export interface ChapterObj {
  id: string;
  spaceId: string;
  title: string;
  description: string;
  idx: number;
}

export const exampleChapter: ChapterObj = {
  id: '0',
  spaceId: '0',
  title: 'Melody',
  description: 'This is a description',
  idx: 0,
};

export const ChapterContext = createContext<ChapterObj>({} as ChapterObj);

export const exampleChapters: ChapterObj[] = [
  {
    id: '0',
    title: 'Concept',
    description: 'Concept Description',
    spaceId: '0',
    idx: 0,
  },
  {
    id: '1',
    title: 'Beat',
    description: 'Beat Description',
    spaceId: '0',
    idx: 1,
  },
  {
    id: '2',
    title: 'Melody',
    description: 'Melody Description',
    spaceId: '0',
    idx: 2,
  },
];
