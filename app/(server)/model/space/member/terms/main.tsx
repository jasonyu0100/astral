import { ModelInterface } from '@/(server)/model/main';
import moment from 'moment';
import { createContext } from 'react';

export interface SpaceMemberTermsObj {
  id: string;
  title: string;
  description: string;
  created: string;
  end: string;
}

export const spaceMemberTermsGql = `
type SpaceMemberTermsObj {
  id: String!
  title: String!
  description: String!
  created: String!
  end: String!
}
`;

export const ContextForSpaceMemberTermsObj = createContext<SpaceMemberTermsObj>(
  {} as SpaceMemberTermsObj,
);

export const exampleSpaceMemberTerms: SpaceMemberTermsObj = {
  id: '0',
  title: 'Member Terms',
  description: 'Member Description',
  created: new Date().toISOString(),
  end: moment(new Date()).add(1, 'year').toISOString(),
};

export const exampleSpaceMemberTermsList: SpaceMemberTermsObj[] = [
  {
    id: '0',
    title: 'Member Terms',
    description: 'Member Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
  {
    id: '0',
    title: 'Member Terms',
    description: 'Member Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
  {
    id: '0',
    title: 'Member Terms',
    description: 'Member Description',
    created: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
  },
];

export const spaceMemberTermsModel: ModelInterface<SpaceMemberTermsObj> = {
  name: 'terms',
  gql: spaceMemberTermsGql,
  example: exampleSpaceMemberTerms,
  examples: exampleSpaceMemberTermsList,
  parentKey: 'userId',
  children: [],
};
