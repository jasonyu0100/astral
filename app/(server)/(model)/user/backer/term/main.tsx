import { ModelInterface } from '@/(server)/(model)/main';
import moment from 'moment';
import { createContext } from 'react';
import { userBackerGql } from '../main';

export interface UserBackerTermsObj {
  id: string;
  title: string;
  description: string;
  created: string;
  end: string;
}

export const userBackerTermsGql = `
type UserBackerTermsObj {
  id: String!
  title: String!
  description: String!
  created: String!
  end: String!
}
`;

export const ContextForUserBackerTermsObj = createContext<UserBackerTermsObj>(
  {} as UserBackerTermsObj,
);

export const exampleUserBackerTerms: UserBackerTermsObj = {
  id: '0',
  title: 'Backer Terms',
  description: 'Backer Description',
  created: new Date().toISOString(),
  end: moment(new Date()).add(1, 'year').toISOString(),
};

export const exampleUserBackerTermsList: UserBackerTermsObj[] = [
  {
    id: '0',
    title: 'Backer Terms',
    description: 'Backer Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
  {
    id: '0',
    title: 'Backer Terms',
    description: 'Backer Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
  {
    id: '0',
    title: 'Backer Terms',
    description: 'Backer Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
];

export const userBackerTermsModel: ModelInterface<UserBackerTermsObj> = {
  name: 'terms',
  gql: userBackerGql,
  example: exampleUserBackerTerms,
  examples: exampleUserBackerTermsList,
  parentKey: '',
  children: [],
};
