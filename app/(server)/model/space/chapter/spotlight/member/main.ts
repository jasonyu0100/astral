import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface SpotlightMemberObj {
  id: string;
  spotlightId: string;
  userId: string;
  created: string;
}

export const spotlightMemberGql = `
type SpotlightMemberObj {
  id: String!
  spotlightId: String!
  userId: String!
  created: String!
}
`;

export const ContextForSpotlightMemberObj = createContext<SpotlightMemberObj>(
  {} as SpotlightMemberObj,
);

export const exampleSpotlightMember: SpotlightMemberObj = {
  id: '0',
  spotlightId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleSpotlightMembers: SpotlightMemberObj[] = [
  {
    id: '0',
    spotlightId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    spotlightId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    spotlightId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const spotlightMemberModel: ModelInterface<SpotlightMemberObj> = {
  name: 'member',
  gql: spotlightMemberGql,
  example: exampleSpotlightMember,
  examples: exampleSpotlightMembers,
  parentKey: 'spotlightId',
  children: [],
};
