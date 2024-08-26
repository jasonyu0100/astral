import { ModelInterface } from '@/(server)/model/main';
import moment from 'moment';
import { createContext } from 'react';

export interface HorizonGroupMemberTermsObj {
  id: string;
  title: string;
  description: string;
  created: string;
  end: string;
}

export const horizonGroupMemberTermGql = `
type HorizonGroupMemberTermsObj {
  id: String!
  title: String!
  description: String!
  created: String!
  end: String!
}
`;

export const ContextForHorizonGroupMemberTermsObj =
  createContext<HorizonGroupMemberTermsObj>({} as HorizonGroupMemberTermsObj);

export const exampleHorizonGroupMemberTerms: HorizonGroupMemberTermsObj = {
  id: '0',
  title: 'Connection Terms',
  description: 'Connection Description',
  created: new Date().toISOString(),
  end: moment(new Date()).add(1, 'year').toISOString(),
};

export const exampleHorizonGroupMemberTermsList: HorizonGroupMemberTermsObj[] =
  [
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

export const horizonGroupMemberTermsModel: ModelInterface<HorizonGroupMemberTermsObj> =
  {
    name: 'terms',
    gql: horizonGroupMemberTermGql,
    example: exampleHorizonGroupMemberTerms,
    examples: exampleHorizonGroupMemberTermsList,
    parentKey: '',
    children: [],
  };
