import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface UserConnectionObj {
  id: string;
  userId: string;
  connectionId: string;
  created: string;
}

export const userConnectionGql = `
type UserConnectionObj {
  id: String!
  userId: String!
  connectionId: String!
  created: String!
}
`;

export const ContextForUserConnectionObj = createContext<UserConnectionObj>(
  {} as UserConnectionObj,
);

export const exampleUserConnection: UserConnectionObj = {
  id: '0',
  connectionId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleUserConnections: UserConnectionObj[] = [
  {
    id: '0',
    connectionId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    connectionId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    connectionId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const userConnectionModel: ModelInterface<UserConnectionObj> = {
  name: 'connection',
  gql: userConnectionGql,
  example: exampleUserConnection,
  examples: exampleUserConnections,
  parentKey: 'userId',
  children: [],
};
