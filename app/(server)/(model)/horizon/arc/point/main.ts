import { createContext } from 'react';

export interface ArcPointObj {
  id: string;
  arcId: string;
  spaceId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
  idx: number;
}

export const arcPointGql = `
type ArcPointObj {
  id : String!
  arcId : String!
  spaceId : String!
  userId: String!
  title : String!
  description : String!
  time : String!
  idx: Int!
}
`;

export const ContextForArcPointObj = createContext<ArcPointObj>(
  {} as ArcPointObj,
);

export const exampleArcPoint: ArcPointObj = {
  id: '0',
  arcId: '0',
  spaceId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
  idx: 0,
};

export const exampleArcPoints: ArcPointObj[] = [
  {
    id: '0',
    arcId: '0',
    spaceId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
    idx: 0,
  },
  {
    id: '1',
    arcId: '0',
    spaceId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
    idx: 1,
  },
  {
    id: '2',
    arcId: '0',
    spaceId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
    idx: 2,
  },
];
