import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonGroupSessionObj {
  id: string;
  groupId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const horizonGroupSessionGql = `
type HorizonGroupSessionObj {
  id : String!
  groupId : String!
  userId: String!
  title : String!
  description : String!
  created: String!
}
`;

export const ContextForHorizonGroupSessionObj =
  createContext<HorizonGroupSessionObj>({} as HorizonGroupSessionObj);

export const exampleHorizonGroupSession: HorizonGroupSessionObj = {
  id: '0',
  groupId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleHorizonGroupSessions: HorizonGroupSessionObj[] = [
  {
    id: '0',
    groupId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Review Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    groupId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Review Description',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    groupId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Review Description',
    created: new Date().toISOString(),
  },
];

export const horizonGroupSessionModel: ModelInterface<HorizonGroupSessionObj> =
  {
    name: 'session',
    example: exampleHorizonGroupSession,
    gql: horizonGroupSessionGql,
    examples: exampleHorizonGroupSessions,
    parentKey: 'groupId',
    children: ['update'],
  };
