import { ModelInterface } from '@/architecture/model/main';
import { createContext } from 'react';

export interface IdeaRelationshipObj {
  id: string;
  spaceId?: string;
  horizonId?: string;
  fromUserId?: string;
  fromChapterId?: string;
  fromSceneId?: string;
  fromIdeaId?: string;
  toUserId?: string;
  toChapterId?: string;
  toSceneId?: string;
  toIdeaId?: string;
  weight: number;
  created: string;
}

export const ideaRelationshipGql = `
type IdeaRelationshipObj {
  id: String!
  spaceId: String
  horizonId: String
  fromUserId: String
  fromChapterId: String
  fromSceneId: String
  fromIdeaId: String
  toUserId: String
  toChapterId: String
  toSceneId: String
  toIdeaId: String
  weight: Float!
  created: String!
}
`;

export const ContextForIdeaRelationshipObj = createContext<IdeaRelationshipObj>(
  {} as IdeaRelationshipObj,
);

export const exampleIdeaRelationship: IdeaRelationshipObj = {
  id: '0',
  spaceId: '0',
  horizonId: '0',
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

export const exampleIdeaRelationships: IdeaRelationshipObj[] = [
  {
    id: '1',
    spaceId: '0',
    horizonId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromSceneId: '0',
    fromIdeaId: '0',
    toUserId: '0',
    toChapterId: '0',
    toSceneId: '0',
    toIdeaId: '0',
    weight: 0,
    created: new Date().toISOString(),
  },
  {
    id: '2',
    spaceId: '0',
    horizonId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromSceneId: '0',
    fromIdeaId: '0',
    toUserId: '0',
    toChapterId: '0',
    toSceneId: '0',
    toIdeaId: '0',
    weight: 0,
    created: new Date().toISOString(),
  },
  {
    id: '3',
    spaceId: '0',
    horizonId: '0',
    fromUserId: '0',
    fromChapterId: '0',
    fromSceneId: '0',
    fromIdeaId: '0',
    toUserId: '0',
    toChapterId: '0',
    toSceneId: '0',
    toIdeaId: '0',
    weight: 0,
    created: new Date().toISOString(),
  },
];

export const ideaRelationshipModel: ModelInterface<IdeaRelationshipObj> = {
  name: 'relationship',
  gql: ideaRelationshipGql,
  example: exampleIdeaRelationship,
  examples: exampleIdeaRelationships,
  parentKey: 'fromSpaceId',
  children: [],
};
