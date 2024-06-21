import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonSessionUpdateObj {
  id: string;
  sessionId: string;
  value: number;
  message: string;
  created: string;
}

export const horizonSessionUpdateGql = `
type HorizonSessionUpdateObj {
  id: String!
  sessionId: String!
  value: Int!
  message: String!
  created: String!
}
`;

export const ContextForHorizonSessionUpdateObj =
  createContext<HorizonSessionUpdateObj>({} as HorizonSessionUpdateObj);

export const exampleHorizonSessionUpdate: HorizonSessionUpdateObj = {
  id: '0',
  sessionId: '0',
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleHorizonSessionUpdates: HorizonSessionUpdateObj[] = [
  {
    id: '0',
    sessionId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    sessionId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    sessionId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
];

export const horizonSessionUpdateModel: ModelInterface<HorizonSessionUpdateObj> =
  {
    name: 'update',
    gql: horizonSessionUpdateGql,
    example: exampleHorizonSessionUpdate,
    examples: exampleHorizonSessionUpdates,
    parentKey: 'sessionId',
    children: [],
  };
