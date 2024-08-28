import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface SceneMemberObj {
  id: string;
  sceneId: string;
  userId?: string;
  created: string;
}

export const sceneMemberGql = `
type SceneMemberObj {
  id: String!
  sceneId: String!
  userId: String!
  created: String!
}
`;

export const ContextForSceneMemberObj = createContext<SceneMemberObj>(
  {} as SceneMemberObj,
);

export const exampleSceneMember: SceneMemberObj = {
  id: '0',
  sceneId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleSceneMembers: SceneMemberObj[] = [
  {
    id: '0',
    sceneId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    sceneId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    sceneId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const sceneMemberModel: ModelInterface<SceneMemberObj> = {
  name: 'member',
  gql: sceneMemberGql,
  example: exampleSceneMember,
  examples: exampleSceneMembers,
  parentKey: 'sceneId',
  children: [],
};
