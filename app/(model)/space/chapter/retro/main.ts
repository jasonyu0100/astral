import { createContext } from 'react';

export interface ChapterRetroObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  time: string;
}

export const chapterRetroGql = `
type ChapterRetroObj {
id: String!
chapterId: String!
title: String!
description: String!
time: String!
}
`

export const ChapterRetroContext = createContext<ChapterRetroObj>({} as ChapterRetroObj);

export const exampleChapterRetro: ChapterRetroObj = {
  id: '0',
  chapterId: '0',
  title: 'May Retro',
  description: 'Productive month with new scenes and verses added into the mix',
  time: new Date('2023-12-19').toISOString(),
};

export const exampleChapterRetros: ChapterRetroObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'May Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '1',
    chapterId: '0',
    title: 'June Retro',
    description: 'Not so productive month',
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '2',
    chapterId: '0',
    title: 'July Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    time: new Date('2023-12-19').toISOString(),
  },
];
