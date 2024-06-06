import { createContext } from 'react';

export interface UserSupporterObj {
  id: string;
  supporterId: string;
  userId: string;
}

export const userSupporterGql = `
type UserSupporterObj {
  id: String!
  supporterId: String!
  userId: String!
}
`;

export const UserSupporterObjContext = createContext<UserSupporterObj>(
  {} as UserSupporterObj,
);

export const exampleUserSupporter: UserSupporterObj = {
  id: '0',
  supporterId: '0',
  userId: '0',
};

export const exampleUserSupporters: UserSupporterObj[] = [
  {
    id: '0',
    supporterId: '0',
    userId: '0',
  },
  {
    id: '0',
    supporterId: '0',
    userId: '0',
  },
  {
    id: '0',
    supporterId: '0',
    userId: '0',
  },
];
