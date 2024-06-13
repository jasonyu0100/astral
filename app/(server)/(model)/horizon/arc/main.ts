import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface HorizonArcObj {
  id: string;
  horizonId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
  idx: number;
}

export const horizonArcGql = `
type HorizonArcObj {
  id: String!
  horizonId: String!
  userId: String!
  title: String!
  description: String!
  created: String!
  idx: Int!
}
`;

export const ContextForHorizonArcObj = createContext<HorizonArcObj>(
  {} as HorizonArcObj,
);

export const exampleHorizonArc: HorizonArcObj = {
  id: '0',
  horizonId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
  idx: 0,
};

export const exampleHorizonArcs: HorizonArcObj[] = [
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
    idx: 0,
  },
  {
    id: '1',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
    idx: 1,
  },
  {
    id: '2',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
    idx: 2,
  },
];

export const horizonArcModel: ModelInterface<HorizonArcObj> = {
  name: 'arc',
  gql: horizonArcGql,
  example: exampleHorizonArc,
  examples: exampleHorizonArcs,
  parentKey: 'horizonId',
  children: ['point', 'forum'],
}