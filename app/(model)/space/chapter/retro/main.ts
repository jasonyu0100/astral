import { createContext } from 'react';

export interface RetroObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  time: string;
}

export const RetroContext = createContext<RetroObj>({} as RetroObj);

export const exampleRetro: RetroObj = {
  id: '0',
  chapterId: '0',
  title: 'May Retro',
  description: 'Productive month with new scenes and verses added into the mix',
  time: new Date('2023-12-19').toISOString(),
};

export const exampleRetros: RetroObj[] = [
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
