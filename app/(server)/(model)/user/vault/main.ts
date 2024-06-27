import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface UserVaultObj {
  id: string;
  userId: string;
  region: string;
  name: string;
  accessHash: string;
  created: string;
}

export const ContextForUserVaultObj = createContext<UserVaultObj>(
  {} as UserVaultObj,
);

export const userVaultGql = `
type UserVaultObj {
  id: String!
  userId: String!
  region: String!
  name: String!
  accessHash: String!
  created: String!
}
`;

export const exampleUserVault: UserVaultObj = {
  id: '0',
  userId: '0',
  region: 'us-east-1',
  name: 'sample-vault',
  accessHash: ' ',
  created: new Date().toISOString(),
};

export const exampleUserVaults: UserVaultObj[] = [
  {
    id: '0',
    userId: '0',
    region: 'us-east-1',
    name: 'sample-vault',
    accessHash: ' ',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    userId: '0',
    region: 'us-east-1',
    name: 'sample-vault',
    accessHash: ' ',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    userId: '0',
    region: 'us-east-1',
    name: 'sample-vault',
    accessHash: ' ',
    created: new Date().toISOString(),
  },
];

export const userVaultModel: ModelInterface<UserVaultObj> = {
  name: 'vault',
  gql: userVaultGql,
  example: exampleUserVault,
  examples: exampleUserVaults,
  parentKey: 'userId',
  children: [],
};
