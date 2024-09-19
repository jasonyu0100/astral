import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface LogMemberObj {
  id: string;
  logId: string;
  userId: string;
  created: string;
}

export const LogMemberGql = `
type LogMemberObj {
  id: String!
  logId: String!
  userId: String!
  created: String!
}
`;

export const ContextForLogMemberObj = createContext<LogMemberObj>(
  {} as LogMemberObj,
);

export const exampleLogMember: LogMemberObj = {
  id: '0',
  logId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleLogMembers: LogMemberObj[] = [
  {
    id: '0',
    logId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    logId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    logId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const logMemberModel: ModelInterface<LogMemberObj> = {
  name: 'log',
  gql: LogMemberGql,
  example: exampleLogMember,
  examples: exampleLogMembers,
  parentKey: 'logId',
  children: [],
};
