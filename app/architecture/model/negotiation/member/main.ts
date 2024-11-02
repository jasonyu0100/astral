import { createContext } from 'react';

export interface NegotiationMemberObj {
  id: string;
  userId: string;
  sideId: string; // sideId can be negotiation userId or receiverId
  negotationId: string;
  created: string;
}

export const negotiationMemberGql = `
type NegotiationMemberObj {
  id: String!
  userId: String!
  sideId: String!
  negotationId: String!
  created: String!
}
`;

export const ContextForNegotiationMemberObj =
  createContext<NegotiationMemberObj>({} as NegotiationMemberObj);

export const exampleNegotiationMember: NegotiationMemberObj = {
  id: '0',
  userId: '0',
  sideId: '0',
  negotationId: '0',
  created: new Date().toISOString(),
};

export const exampleNegotiationMembers: NegotiationMemberObj[] = [
  {
    id: '0',
    userId: '0',
    sideId: '0',
    negotationId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    userId: '0',
    sideId: '0',
    negotationId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    userId: '0',
    sideId: '0',
    negotationId: '0',
    created: new Date().toISOString(),
  },
];

export const negotiationMemberModel = {
  name: 'member',
  gql: negotiationMemberGql,
  example: exampleNegotiationMember,
  examples: exampleNegotiationMembers,
  parentKey: 'negotiationId',
  children: [],
};
