import { createContext } from 'react';

export interface VerseMemberObj {
  id: string;
  verseId: string;
  userId: string;
}

export const verseMemberGql = `
type VerseMemberObj {
  id: String!
  verseId: String!
  userId: String!
}
`;

export const VerseMemberObjContext = createContext<VerseMemberObj>(
  {} as VerseMemberObj,
);

export const exampleVerseMember: VerseMemberObj = {
  id: '0',
  verseId: '0',
  userId: '0',
};

export const exampleVerseMembers: VerseMemberObj[] = [
  {
    id: '0',
    verseId: '0',
    userId: '0',
  },
  {
    id: '0',
    verseId: '0',
    userId: '0',
  },
  {
    id: '0',
    verseId: '0',
    userId: '0',
  },
];
