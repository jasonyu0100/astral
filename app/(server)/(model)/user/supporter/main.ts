import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface UserSupporterObj {
  id: string;
  supporterId: string;
  userId: string;
  created: string;
}

export const userSupporterGql = `
type UserSupporterObj {
  id: String!
  supporterId: String!
  userId: String!
  created: String!
}
`;

export const ContextForUserSupporterObj = createContext<UserSupporterObj>(
  {} as UserSupporterObj,
);

export const exampleUserSupporter: UserSupporterObj = {
  id: '0',
  supporterId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleUserSupporters: UserSupporterObj[] = [
  {
    id: '0',
    supporterId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    supporterId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    supporterId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const userSupporterModel : ModelInterface<UserSupporterObj> = {
  name: 'supporter',
  gql: userSupporterGql,
  example: exampleUserSupporter,
  examples: exampleUserSupporters,
  parentKey: 'userId',
  children: [],
};