import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface UserConnectionObj {
  id: string;
  userId: string;
  connectedId: string;
  termsId: string;
  created: string;
}

export const userConnectionGql = `
type UserConnectionObj {
  id: String!
  userId: String!
  connectedId: String!
  created: String!
  termsId: String!
}
`;

export const ContextForUserConnectionObj = createContext<UserConnectionObj>(
  {} as UserConnectionObj,
);

export const exampleUserConnection: UserConnectionObj = {
  id: '0',
  connectedId: '0',
  userId: '0',
  created: new Date().toISOString(),
  termsId: '0',
};

export const exampleUserConnections: UserConnectionObj[] = [
  {
    id: '0',
    connectedId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '0',
    connectedId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '0',
    connectedId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
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
