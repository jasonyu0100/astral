import { createContext } from 'react';

export interface HorizonMemberObj {
  id: string;
  forumId: string;
  userId: string;
}

export const horizonMemberGql = `
type HorizonMemberObj {
  id: String!
  forumId: String!
  userId: String!
}
`;

export const HorizonMemberObjContext = createContext<HorizonMemberObj>(
  {} as HorizonMemberObj,
);

export const exampleHorizonMember: HorizonMemberObj = {
  id: '0',
  forumId: '0',
  userId: '0',
};

export const exampleHorizonMembers: HorizonMemberObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
];
