import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface HorizonArcObj {
  id: string;
  userId: string;
  horizonId: string;
  title: string;
  description: string;
  objective: string;
  summary: string;
  idx: number;
  created: string;
}

export const horizonArcGql = `
type HorizonArcObj {
  id: String!
  userId: String!
  horizonId: String!
  title: String!
  description: String!
  objective: String!
  idx: Int!
  created: String!
}
  `;

export const exampleHorizonArc: HorizonArcObj = {
  id: '0',
  userId: '0',
  horizonId: '0',
  title: 'Melody',
  description: 'This is an arc description',
  objective: 'This is an arc objective',
  summary: 'This is an arc summary',
  idx: 0,
  created: new Date().toISOString(),
};

export const ContextForHorizonArcObj = createContext<HorizonArcObj>(
  {} as HorizonArcObj,
);

export const exampleHorizonArcs: HorizonArcObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Concept',
    description: 'This is an arc description',
    objective: 'This is an arc objective',
    summary: 'This is an arc summary',
    horizonId: '0',
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
    horizonId: '0',
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
    horizonId: '0',
    idx: 2,
    created: new Date().toISOString(),
  },
];

export const horizonArcModel: ModelInterface<HorizonArcObj> = {
  name: 'arc',
  gql: horizonArcGql,
  example: exampleHorizonArc,
  examples: exampleHorizonArcs,
  parentKey: 'horizonId',
  children: ['section'],
};
