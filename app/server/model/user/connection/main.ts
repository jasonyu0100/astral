import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface UserConnectionObj {
  id: string;
  sourceId: string;
  destinationId: string;
  created: string;
}

export const userConnectionGql = `
type UserConnectionObj {
  id: String!
  sourceId: String!
  destinationId: String!
  created: String!
}
`;

export const ContextForUserConnectionObj = createContext<UserConnectionObj>(
  {} as UserConnectionObj,
);

export const exampleUserConnection: UserConnectionObj = {
  id: '0',
  destinationId: '0',
  sourceId: '0',
  created: new Date().toISOString(),
};

export const exampleUserConnections: UserConnectionObj[] = [
  {
    id: '0',
    destinationId: '0',
    sourceId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    destinationId: '0',
    sourceId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    destinationId: '0',
    sourceId: '0',
    created: new Date().toISOString(),
  },
];

export const userConnectionModel: ModelInterface<UserConnectionObj> = {
  name: 'connection',
  gql: userConnectionGql,
  example: exampleUserConnection,
  examples: exampleUserConnections,
  parentKey: 'sourceId',
  children: [],
};
