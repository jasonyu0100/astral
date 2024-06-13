import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ArcForumObj {
  id: string;
  arcId: string;
  title: string;
  description: string;
  created: string;
}

export const arcForumGql = `
type ArcForumObj {
  id: String!
  arcId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForArcForumObj = createContext<ArcForumObj>(
  {} as ArcForumObj,
);

export const exampleArcForum: ArcForumObj = {
  id: '0',
  arcId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleArcForums: ArcForumObj[] = [
  {
    id: '0',
    arcId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    arcId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
];

export const arcForumModel: ModelInterface<ArcForumObj> = {
  name: 'arcForum',
  gql: arcForumGql,
  example: exampleArcForum,
  examples: exampleArcForums,
  children: ['post', 'member'],
  parentKey: 'arcId',
};
