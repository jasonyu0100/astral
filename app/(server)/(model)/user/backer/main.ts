import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface UserBackerObj {
  id: string;
  userId: string;
  backerId: string;
  created: string;
}

export const userBackerGql = `
type UserBackerObj {
  id: String!
  backerId: String!
  userId: String!
  created: String!
}
`;

export const ContextForUserBackerObj = createContext<UserBackerObj>(
  {} as UserBackerObj,
);

export const exampleUserBacker: UserBackerObj = {
  id: '0',
  backerId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleUserBackers: UserBackerObj[] = [
  {
    id: '0',
    backerId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    backerId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    backerId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const userBackerModel: ModelInterface<UserBackerObj> = {
  name: 'backer',
  gql: userBackerGql,
  example: exampleUserBacker,
  examples: exampleUserBackers,
  parentKey: 'userId',
  children: [],
};
