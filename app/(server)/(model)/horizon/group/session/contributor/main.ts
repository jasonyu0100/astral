import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonGroupSessionContributorObj {
  id: string;
  sessionId: string;
  userId: string;
  created: string;
}

export const horizonGroupSessionContributorGql = `
type HorizonGroupSessionContributorObj {
  id: String!
  sessionId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonGroupSessionContributorObj =
  createContext<HorizonGroupSessionContributorObj>(
    {} as HorizonGroupSessionContributorObj,
  );

export const exampleHorizonGroupSessionContributor: HorizonGroupSessionContributorObj =
  {
    id: '0',
    sessionId: '0',
    userId: '0',
    created: new Date().toISOString(),
  };

export const exampleHorizonGroupSessionContributors: HorizonGroupSessionContributorObj[] =
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

export const horizonGroupSessionContributorModel: ModelInterface<HorizonGroupSessionContributorObj> =
  {
    name: 'contributor',
    gql: horizonGroupSessionContributorGql,
    example: exampleHorizonGroupSessionContributor,
    examples: exampleHorizonGroupSessionContributors,
    parentKey: 'sessionId',
    children: [],
  };
