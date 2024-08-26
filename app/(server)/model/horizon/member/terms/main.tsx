import { ModelInterface } from '@/(server)/model/main';
import moment from 'moment';
import { createContext } from 'react';

export interface HorizonMemberTermsObj {
  id: string;
  title: string;
  description: string;
  created: string;
  end: string;
}

export const horizonMemberTermsGql = `
type HorizonMemberTermsObj {
  id: String!
  title: String!
  description: String!
  created: String!
  end: String!
}
`;

export const ContextForHorizonMemberTermsObj =
  createContext<HorizonMemberTermsObj>({} as HorizonMemberTermsObj);

export const exampleHorizonMemberTerms: HorizonMemberTermsObj = {
  id: '0',
  title: 'Connection Terms',
  description: 'Connection Description',
  created: new Date().toISOString(),
  end: moment(new Date()).add(1, 'year').toISOString(),
};

export const exampleHorizonMemberTermsList: HorizonMemberTermsObj[] = [
  {
    id: '0',
    title: 'Connection Terms',
    description: 'Connection Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
  {
    id: '0',
    title: 'Connection Terms',
    description: 'Connection Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
  {
    id: '0',
    title: 'Connection Terms',
    description: 'Connection Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
];

export const horizonMemberTermsModel: ModelInterface<HorizonMemberTermsObj> = {
  name: 'terms',
  gql: horizonMemberTermsGql,
  example: exampleHorizonMemberTerms,
  examples: exampleHorizonMemberTermsList,
  parentKey: '',
  children: [],
};
