import { createContext } from 'react';

export interface RetroMemberObj {
  id: string;
  retroId: string;
  userId: string;
  created: string;
}

export const retroMemberGql = `
type RetroMemberObj {
  id: String!
  retroId: String!
  userId: String!
  created: String!
}
`;

export const ContextForRetroMemberObj = createContext<RetroMemberObj>(
  {} as RetroMemberObj,
);

export const exampleRetroMember: RetroMemberObj = {
  id: '0',
  retroId: '0',
  userId: '0',
  created: new Date('2023-12-19').toISOString(),
};

export const exampleRetroMembers: RetroMemberObj[] = [
  {
    id: '0',
    retroId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    retroId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    retroId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
];
