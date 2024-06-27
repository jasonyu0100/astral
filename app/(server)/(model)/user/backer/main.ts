import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface UserBackerObj {
  id: string;
  userId: string;
  backedId: string;
  created: string;
  termsId: string;
}

export const userBackerGql = `
type UserBackerObj {
  id: String!
  userId: String!
  backedId: String!
  created: String!
  termsId: String!
}
`;

export const ContextForUserBackerObj = createContext<UserBackerObj>(
  {} as UserBackerObj,
);

export const exampleUserBacker: UserBackerObj = {
  id: '0',
  backedId: '0',
  userId: '0',
  created: new Date().toISOString(),
  termsId: '0',
};

export const exampleUserBackers: UserBackerObj[] = [
  {
    id: '0',
    backedId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '0',
    backedId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '0',
    backedId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
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
