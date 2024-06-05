import { createContext } from 'react';

export interface HorizonForumObj {
  id: string;
  horizonId: string;
  title: string;
  description: string;
  time: string;
}

export const HorizonForumContext = createContext<HorizonForumObj>(
  {} as HorizonForumObj,
);

export const exampleHorizonForum: HorizonForumObj = {
  id: '0',
  horizonId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleHorizonForums: HorizonForumObj[] = [
  {
    id: '0',
    horizonId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
