import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface HorizonSessionObj {
  id: string;
  horizonId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const horizonSessionGql = `
type HorizonSessionObj {
  id: String!
  horizonId: String!
  userId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForHorizonSessionObj = createContext<HorizonSessionObj>(
  {} as HorizonSessionObj,
);

export const exampleHorizonSession: HorizonSessionObj = {
  id: '0',
  horizonId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleHorizonSessions: HorizonSessionObj[] = [
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Arc Description',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Arc Description',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Arc Description',
    created: new Date().toISOString(),
  },
];

export const horizonSessionModel: ModelInterface<HorizonSessionObj> = {
  name: 'session',
  example: exampleHorizonSession,
  examples: exampleHorizonSessions,
  gql: horizonSessionGql,
  parentKey: 'horizonId',
  children: ['update', 'member'],
};
