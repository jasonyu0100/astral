import { createContext } from 'react';
import { ModelInterface } from '../main';

export interface NegotiationObj {
  id: string;
  userId: string;
  receiverId: string;
  settled: boolean;
  created: string;
}

export const negotiationGql = `
type NegotiationObj {
id: String!
userId: String!
receiverId: String!
settled: Boolean!
created: String!
}
`;

export const ContextForNegotiationObj = createContext<NegotiationObj>(
  {} as NegotiationObj,
);

export const exampleNegotiation: NegotiationObj = {
  id: '0',
  userId: '0',
  receiverId: '0',
  settled: false,
  created: new Date().toISOString(),
};

export const exampleNegotiationList: NegotiationObj[] = [
  {
    id: '0',
    userId: '0',
    receiverId: '0',
    settled: false,
    created: new Date().toISOString(),
  },
  {
    id: '0',
    userId: '0',
    receiverId: '0',
    settled: false,
    created: new Date().toISOString(),
  },
  {
    id: '0',
    userId: '0',
    receiverId: '0',
    settled: false,
    created: new Date().toISOString(),
  },
];

export const negotiationModel: ModelInterface<NegotiationObj> = {
  name: 'negotiation',
  gql: negotiationGql,
  example: exampleNegotiation,
  examples: exampleNegotiationList,
  parentKey: 'userId',
  children: ['terms', 'member'],
};
