import { createContext } from 'react';

export interface RetroMemberObj {
  id: string;
  retroId: string;
  userId: string;
}

export const retroMemberGql = `
type RetroMemberObj {
  id: String!
  retroId: String!
  userId: String!
}
`;

export const RetroMemberObjContext = createContext<RetroMemberObj>(
  {} as RetroMemberObj,
);

export const exampleRetroMember: RetroMemberObj = {
  id: '0',
  retroId: '0',
  userId: '0',
};

export const exampleRetroMembers: RetroMemberObj[] = [
  {
    id: '0',
    retroId: '0',
    userId: '0',
  },
  {
    id: '0',
    retroId: '0',
    userId: '0',
  },
  {
    id: '0',
    retroId: '0',
    userId: '0',
  },
];
