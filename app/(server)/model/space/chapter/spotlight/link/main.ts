import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface SpotlightLinkObj {
  id: string;
  spotlightId: string;
  userId: string;
  logId: string;
  created: string;
}

export const SpotlightLinkGql = `
type SpotlightLinkObj {
  id: String!
  spotlightId: String!
  userId: String!
  logId: String!
  created: String!
}
`;

export const ContextForSpotlightLinkObj = createContext<SpotlightLinkObj>(
  {} as SpotlightLinkObj,
);

export const exampleSpotlightLink: SpotlightLinkObj = {
  id: '0',
  spotlightId: '0',
  userId: '0',
  logId: '0',
  created: new Date().toISOString(),
};

export const exampleSpotlightLinks: SpotlightLinkObj[] = [
  {
    id: '0',
    spotlightId: '0',
    userId: '0',
    logId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    spotlightId: '0',
    userId: '0',
    logId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    spotlightId: '0',
    userId: '0',
    logId: '0',
    created: new Date().toISOString(),
  },
];

export const spotlightLinkModel: ModelInterface<SpotlightLinkObj> = {
  name: 'link',
  gql: SpotlightLinkGql,
  example: exampleSpotlightLink,
  examples: exampleSpotlightLinks,
  parentKey: 'spotlightId',
  children: [],
};
