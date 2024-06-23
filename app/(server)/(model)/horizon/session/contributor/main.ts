import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonSessionContributorObj {
  id: string;
  sessionId: string;
  userId: string;
  created: string;
}

export const horizonSessionContributorGql = `
type HorizonSessionContributorObj {
  id: String!
  sessionId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonSessionContributorObj =
  createContext<HorizonSessionContributorObj>(
    {} as HorizonSessionContributorObj,
  );

export const exampleHorizonSessionContributor: HorizonSessionContributorObj = {
  id: '0',
  sessionId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleHorizonSessionContributors: HorizonSessionContributorObj[] =
  [
    {
      id: '0',
      sessionId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
    {
      id: '0',
      sessionId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
    {
      id: '0',
      sessionId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
  ];

export const horizonSessionContributorModel: ModelInterface<HorizonSessionContributorObj> =
  {
    name: 'contributor',
    gql: horizonSessionContributorGql,
    example: exampleHorizonSessionContributor,
    examples: exampleHorizonSessionContributors,
    parentKey: 'sessionId',
    children: [],
  };
