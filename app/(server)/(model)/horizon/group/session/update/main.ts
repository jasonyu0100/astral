import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonGroupSessionUpdateObj {
  id: string;
  sessionId: string;
  value: number;
  message: string;
  created: string;
}

export const horizonGroupSessionUpdateGql = `
type HorizonGroupSessionUpdateObj {
  id: String!
  sessionId: String!
  value: Int!
  message: String!
  created: String!
}
`;

export const ContextForHorizonGroupSessionUpdateObj =
  createContext<HorizonGroupSessionUpdateObj>(
    {} as HorizonGroupSessionUpdateObj,
  );

export const exampleHorizonGroupSessionUpdate: HorizonGroupSessionUpdateObj = {
  id: '0',
  sessionId: '0',
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleHorizonGroupSessionUpdates: HorizonGroupSessionUpdateObj[] =
  [
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

export const horizonGroupSessionUpdateModel: ModelInterface<HorizonGroupSessionUpdateObj> =
  {
    name: 'update',
    gql: horizonGroupSessionUpdateGql,
    example: exampleHorizonGroupSessionUpdate,
    examples: exampleHorizonGroupSessionUpdates,
    parentKey: 'sessionId',
    children: ['member'],
  };
