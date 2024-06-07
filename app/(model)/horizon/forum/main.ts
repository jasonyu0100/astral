import { createContext } from 'react';

export interface HorizonForumObj {
  id: string;
  horizonId: string;
  title: string;
  description: string;
  created: string;
}

export const horizonForumGql = `
type HorizonForumObj {
  id: String!
  horizonId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForHorizonForumObj = createContext<HorizonForumObj>(
  {} as HorizonForumObj,
);

export const exampleHorizonForum: HorizonForumObj = {
  id: '0',
  horizonId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleHorizonForums: HorizonForumObj[] = [
  {
    id: '0',
    horizonId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
];
