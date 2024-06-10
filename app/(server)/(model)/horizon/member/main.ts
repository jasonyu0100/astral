import { createContext } from 'react';

export interface HorizonMemberObj {
  id: string;
  forumId: string;
  userId: string;
  created: string;
}

export const horizonMemberGql = `
type HorizonMemberObj {
  id: String!
  forumId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonMemberObj = createContext<HorizonMemberObj>(
  {} as HorizonMemberObj,
);

export const exampleHorizonMember: HorizonMemberObj = {
  id: '0',
  forumId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleHorizonMembers: HorizonMemberObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];
