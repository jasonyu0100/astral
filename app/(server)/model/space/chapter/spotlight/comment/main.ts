import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';
export interface SpotlightCommentObj {
  id: string;
  userId: string;
  spotlightId: string;
  created: string;
  message: string;
}

export const spotlightCommentGql = `
type SpotlightCommentObj {
  id: String!
  userId: String
  spotlightId: String!
  created: String!
  message: String!
}
`;

export const ContextForSpotlightCommentObj = createContext<SpotlightCommentObj>(
  {} as SpotlightCommentObj,
);

export const exampleSpotlightComment: SpotlightCommentObj = {
  id: '0',
  spotlightId: '0',
  created: new Date().toISOString(),
  message: 'This is pretty good actually',
  userId: '0',
};

export const exampleSpotlightComments: SpotlightCommentObj[] = [
  {
    id: '0',
    spotlightId: '0',
    created: new Date().toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    spotlightId: '0',
    created: new Date().toISOString(),
    message: 'Hello World',
    userId: '0',
  },
  {
    id: '2',
    spotlightId: '0',
    created: new Date().toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];

export const spotlightCommentModel: ModelInterface<SpotlightCommentObj> = {
  name: 'comment',
  example: exampleSpotlightComment,
  examples: exampleSpotlightComments,
  gql: spotlightCommentGql,
  children: [],
  parentKey: 'spotlightId',
};
