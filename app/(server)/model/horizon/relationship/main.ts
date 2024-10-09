import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface HorizonIdeaRelationshipObj {
  id: string;
  horizonId: string;
  fromUserId: string;
  fromChapterId: string;
  fromPageId: string;
  fromIdeaId: string;
  toUserId: string;
  toChapterId: string;
  toSceneId: string;
  toIdeaId: string;
  weight: number;
  created: string;
}

export const horizonIdeaRelationshipObj = `
type SpaceIdeaRelationshipObj {
  id: String!
  horizonId: String!
  fromUserId: String!
  fromChapterId: String!
  fromPageId: String!
  fromIdeaId: String!
  toUserId: String!
  toChapterId: String!
  toSceneId: String!
  toIdeaId: String!
  weight: Float!
  created: String!
}
`;

export const ContextForSpaceIdeaRelationshipObj =
  createContext<HorizonIdeaRelationshipObj>({} as HorizonIdeaRelationshipObj);

export const exampleSpaceIdeaRelationship: HorizonIdeaRelationshipObj = {
  id: '0',
  horizonId: '0',
  fromUserId: '0',
  fromChapterId: '0',
  fromPageId: '0',
  fromIdeaId: '0',
  toUserId: '1',
  toChapterId: '0',
  toSceneId: '0',
  toIdeaId: '0',
  weight: 0,
  created: new Date().toISOString(),
};

export const exampleSpaceIdeaRelationships: HorizonIdeaRelationshipObj[] = [
  {
    id: '0',
    horizonId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromPageId: '0',
    fromIdeaId: '0',
    toUserId: '0',
    toSceneId: '0',
    toChapterId: '0',
    toIdeaId: '0',
    weight: 0,
    created: new Date().toISOString(),
  },
  {
    id: '0',
    horizonId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromPageId: '0',
    fromIdeaId: '0',
    toUserId: '0',
    toSceneId: '0',
    toChapterId: '0',
    toIdeaId: '0',
    weight: 0,
    created: new Date().toISOString(),
  },
  {
    id: '0',
    horizonId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromPageId: '0',
    fromIdeaId: '0',
    toUserId: '0',
    toSceneId: '0',
    toChapterId: '0',
    toIdeaId: '0',
    weight: 0,
    created: new Date().toISOString(),
  },
];

export const spaceIdeaRelationshipModel: ModelInterface<HorizonIdeaRelationshipObj> =
  {
    name: 'relationship',
    gql: horizonIdeaRelationshipObj,
    example: exampleSpaceIdeaRelationship,
    examples: exampleSpaceIdeaRelationships,
    parentKey: 'fromSpaceId',
    children: [],
  };
