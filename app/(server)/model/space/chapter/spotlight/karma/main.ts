import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';
export interface SpotlightKarmaObj {
  id: string;
  userId: string;
  spotlightId: string;
  created: string;
  neutrality: boolean;
}

export const spotlightKarmaGql = `
type SpotlightKarmaObj {
  id: String!
  userId: String
  spotlightId: String!
  created: String!
  neutrality: Boolean!
}
`;

export const ContextForSpotlightKarmaObj = createContext<SpotlightKarmaObj>(
  {} as SpotlightKarmaObj,
);

export const exampleSpotlightKarma: SpotlightKarmaObj = {
  id: '0',
  spotlightId: '0',
  created: new Date().toISOString(),
  neutrality: false,
  userId: '0',
};

export const exampleSpotlightKarmas: SpotlightKarmaObj[] = [
  {
    id: '0',
    spotlightId: '0',
    created: new Date().toISOString(),
    neutrality: false,
    userId: '0',
  },
  {
    id: '1',
    spotlightId: '0',
    created: new Date().toISOString(),
    neutrality: false,
    userId: '0',
  },
  {
    id: '2',
    spotlightId: '0',
    created: new Date().toISOString(),
    neutrality: false,
    userId: '0',
  },
];

export const spotlightKarmaModel: ModelInterface<SpotlightKarmaObj> = {
  name: 'karma',
  example: exampleSpotlightKarma,
  examples: exampleSpotlightKarmas,
  gql: spotlightKarmaGql,
  children: [],
  parentKey: 'spotlightId',
};
