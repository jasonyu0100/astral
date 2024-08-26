import { ModelInterface } from '@/(server)/model/main';
import moment from 'moment';
import { createContext } from 'react';

export interface UserConnectionTermsObj {
  id: string;
  title: string;
  description: string;
  created: string;
  end: string;
}

export const userConnectionTermsGql = `
type UserConnectionTermsObj {
  id: String!
  title: String!
  description: String!
  created: String!
  end: String!
}
`;

export const ContextForUserConnectionTermsObj =
  createContext<UserConnectionTermsObj>({} as UserConnectionTermsObj);

export const exampleUserConnectionTerms: UserConnectionTermsObj = {
  id: '0',
  title: 'Connection Terms',
  description: 'Connection Description',
  created: new Date().toISOString(),
  end: moment(new Date()).add(1, 'year').toISOString(),
};

export const exampleUserConnectionTermsList: UserConnectionTermsObj[] = [
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

export const userConnectionTermsModel: ModelInterface<UserConnectionTermsObj> =
  {
    name: 'terms',
    gql: userConnectionTermsGql,
    example: exampleUserConnectionTerms,
    examples: exampleUserConnectionTermsList,
    parentKey: '',
    children: [],
  };
