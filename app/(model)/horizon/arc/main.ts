import { createContext } from 'react';

export interface ArcObj {
  id: string;
  title: string;
  description: string;
  time: string;
}

export const ArcContext = createContext<ArcObj>({} as ArcObj);

export const exampleArc: ArcObj = {
  id: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleArcs: ArcObj[] = [
  {
    id: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
