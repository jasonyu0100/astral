import { createContext } from 'react';

export interface ArcPointObj {
  id: string;
  arcId: string;
  userId: string;
  title: string;
  description: string;
  time: string;
}

export const arcPointGql = `
type ArcPointObj {
  id : String!
  arcId : String!
  userId: String!
  title : String!
  description : String!
  time : String!
}
`;

export const ArcPointContext = createContext<ArcPointObj>({} as ArcPointObj);

export const exampleArcPoint: ArcPointObj = {
  id: '0',
  arcId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleArcPoints: ArcPointObj[] = [
  {
    id: '0',
    arcId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    arcId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '2',
    arcId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
