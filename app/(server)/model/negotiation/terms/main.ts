import { createContext } from 'react';
import { ModelInterface } from '../../main';
import { exampleTimeTerms } from './time/main';
import { exampleValueTerms } from './value/main';

export enum NegotiationTermsVariant {
  TIME = 'TIME',
  VALUE = 'VALUE',
}

export interface NegotiationTermsObj {
  id: string;
  userId: string;
  receiverId: string;
  negotiationId?: string;
  title: string;
  description: string;
  agreement: boolean;
  settled: boolean;
  created: string;
  variant: string;
  valueTerms?: object;
  timeTerms?: object;
}

export const negotiationTermsGql = `
type NegotiationTermsObj {
  id: String!
  userId: String!
  receiverId: String!
  negotiationId: String
  title: String!
  description: String!
  agreement: Boolean!
  settled: Boolean!
  created: String!
  variant: String!
  valueTerms: ValueTerms
  timeTerms: TimeTerms
}
`;

export const ContextForNegotiationTermsObj = createContext<NegotiationTermsObj>(
  {} as NegotiationTermsObj,
);

export const exampleNegotiationTerms: NegotiationTermsObj = {
  id: '0',
  negotiationId: '0',
  userId: '0',
  receiverId: '0',
  title: 'Terms Example',
  description: 'Terms Description',
  agreement: false,
  settled: false,
  created: new Date().toISOString(),
  variant: NegotiationTermsVariant.VALUE,
  valueTerms: exampleValueTerms,
};

export const exampleNegotiationTermsList: NegotiationTermsObj[] = [
  {
    id: '0',
    negotiationId: '0',
    userId: '0',
    receiverId: '0',
    title: 'Request Terms',
    description: 'I want to get permission to join your space.',
    agreement: false,
    settled: false,
    created: new Date().toISOString(),
    variant: NegotiationTermsVariant.VALUE,
    valueTerms: exampleValueTerms,
  },
  {
    id: '0',
    negotiationId: '0',
    userId: '0',
    receiverId: '0',
    title: 'Request Terms (RE)',
    description: 'You may join so long as you agree to the following terms.',
    agreement: false,
    settled: false,
    created: new Date().toISOString(),
    variant: NegotiationTermsVariant.VALUE,
    valueTerms: exampleValueTerms,
  },
  {
    id: '0',
    negotiationId: '0',
    userId: '0',
    receiverId: '0',
    title: 'Connection Terms',
    description: 'I would like to connect with you for a year.',
    agreement: false,
    settled: false,
    created: new Date().toISOString(),
    variant: NegotiationTermsVariant.TIME,
    timeTerms: exampleTimeTerms,
  },
  {
    id: '0',
    negotiationId: '0',
    userId: '0',
    receiverId: '0',
    title: 'Backing Terms',
    description: 'I would like to back you for a year.',
    agreement: false,
    settled: false,
    created: new Date().toISOString(),
    variant: NegotiationTermsVariant.TIME,
    timeTerms: exampleTimeTerms,
  },
];

export const negotiationTermsModel: ModelInterface<NegotiationTermsObj> = {
  name: 'terms',
  gql: negotiationTermsGql,
  example: exampleNegotiationTerms,
  examples: exampleNegotiationTermsList,
  parentKey: 'negotiationId',
  children: [],
};
