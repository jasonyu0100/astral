import { createContext } from "react";

export interface SpaceChapterObj {
  id: string;
  spaceId: string;
  title: string;
  summary: string;
  idx: number;
}

export const exampleSpaceChapter: SpaceChapterObj = {
  id: '0',
  spaceId: '0',
  title: 'Melody',
  summary: 'This is a description',
  idx: 0,
};

export const SpaceChapterContext = createContext<SpaceChapterObj>({} as SpaceChapterObj);

export const exampleSpaceChapters: SpaceChapterObj[] = [
  {
    id: '0',
    title: 'Concept',
    summary: 'Concept Description',
    spaceId: '0',
    idx: 0,
  },
  {
    id: '1',
    title: 'Beat',
    summary: 'Beat Description',
    spaceId: '0',
    idx: 1,
  },
  {
    id: '2',
    title: 'Melody',
    summary: 'Melody Description',
    spaceId: '0',
    idx: 2,
  },
];
