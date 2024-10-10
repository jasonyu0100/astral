import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface ArcSectionObj {
  id: string;
  userId: string;
  arcId: string;
  title: string;
  description: string;
  objective: string;
  summary: string;
  idx: number;
  created: string;
}

export const arcSectionGql = `
type ArcSectionObj {
  id: String!
  userId: String!
  arcId: String!
  title: String!
  description: String!
  objective: String!
  idx: Int!
  created: String!
}
`;

export const exampleArcSection: ArcSectionObj = {
  id: '0',
  userId: '0',
  arcId: '0',
  title: 'Melody',
  description: 'This is an arc description',
  objective: 'This is an arc objective',
  summary: 'This is an arc summary',
  idx: 0,
  created: new Date().toISOString(),
};

export const ContextForArcSectionObj = createContext<ArcSectionObj>(
  {} as ArcSectionObj,
);

export const exampleArcSections: ArcSectionObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Concept',
    description: 'This is an arc description',
    objective: 'This is an arc objective',
    summary: 'This is an arc summary',
    arcId: '0',
    idx: 0,
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    title: 'Beat',
    description: 'This is an arc description',
    objective: 'This is an arc objective',
    summary: 'This is an arc summary',
    arcId: '0',
    idx: 1,
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    title: 'Melody',
    description: 'This is an arc description',
    objective: 'This is an arc objective',
    summary: 'This is an arc summary',
    arcId: '0',
    idx: 2,
    created: new Date().toISOString(),
  },
];

export const arcSectionModel: ModelInterface<ArcSectionObj> = {
  name: 'section',
  gql: arcSectionGql,
  example: exampleArcSection,
  examples: exampleArcSections,
  parentKey: 'arcId',
  children: [],
};
