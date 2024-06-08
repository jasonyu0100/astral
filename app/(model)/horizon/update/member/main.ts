import { createContext } from 'react';

export interface HorizonUpdateMemberObj {
  id: string;
  updateId: string;
  userId: string;
  created: string;
}

export const horizonUpdateMemberGql = `
type HorizonUpdateMemberObj {
  id: String!
  updateId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonUpdateMemberObj = createContext<HorizonUpdateMemberObj>(
  {} as HorizonUpdateMemberObj,
);

export const exampleHorizonUpdateMember: HorizonUpdateMemberObj = {
  id: '0',
  updateId: '0',
  userId: '0',
  created: new Date('2023-12-19').toISOString(),
};

export const exampleHorizonUpdateMembers: HorizonUpdateMemberObj[] = [
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
];
