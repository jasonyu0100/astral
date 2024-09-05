import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface SpaceIdeaRelationshipObj {
  id: string;
  spaceId: string;
  fromUserId: string;
  fromChapterId: string;
  fromSceneId: string;
  fromIdeaId: string;
  toUserId: string;
  toChapterId: string;
  toSceneId: string;
  toIdeaId: string;
  weight: number;
  created: string;
}

export const spaceIdeaRelationshipObj = `
type SpaceIdeaRelationshipObj {
  id: String!
  spaceId: String!
  fromUserId: String!
  fromChapterId: String!
  fromSceneId: String!
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
  createContext<SpaceIdeaRelationshipObj>({} as SpaceIdeaRelationshipObj);

export const exampleSpaceIdeaRelationship: SpaceIdeaRelationshipObj = {
  id: '0',
  spaceId: '0',
  fromUserId: '0',
  fromChapterId: '0',
  fromSceneId: '0',
  fromIdeaId: '0',
  toUserId: '1',
  toChapterId: '0',
  toSceneId: '0',
  toIdeaId: '0',
  weight: 0,
  created: new Date().toISOString(),
};

export const exampleSpaceIdeaRelationships: SpaceIdeaRelationshipObj[] = [
  {
    id: '0',
    spaceId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromSceneId: '0',
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
    spaceId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromSceneId: '0',
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
    spaceId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromSceneId: '0',
    fromIdeaId: '0',
    toUserId: '0',
    toSceneId: '0',
    toChapterId: '0',
    toIdeaId: '0',
    weight: 0,
    created: new Date().toISOString(),
  },
];

export const spaceIdeaRelationshipModel: ModelInterface<SpaceIdeaRelationshipObj> =
  {
    name: 'relationship',
    gql: spaceIdeaRelationshipObj,
    example: exampleSpaceIdeaRelationship,
    examples: exampleSpaceIdeaRelationships,
    parentKey: 'fromSpaceId',
    children: [],
  };
