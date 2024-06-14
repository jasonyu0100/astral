import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface VerseMemberObj {
  id: string;
  verseId: string;
  userId: string;
  created: string;
}

export const verseMemberGql = `
type VerseMemberObj {
  id: String!
  verseId: String!
  userId: String!
  created: String!
}
`;

export const ContextForVerseMemberObj = createContext<VerseMemberObj>(
  {} as VerseMemberObj,
);

export const exampleVerseMember: VerseMemberObj = {
  id: '0',
  verseId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleVerseMembers: VerseMemberObj[] = [
  {
    id: '0',
    verseId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    verseId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    verseId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const verseMemberModel: ModelInterface<VerseMemberObj> = {
  name: 'member',
  gql: verseMemberGql,
  example: exampleVerseMember,
  examples: exampleVerseMembers,
  parentKey: 'verseId',
  children: [],
};
