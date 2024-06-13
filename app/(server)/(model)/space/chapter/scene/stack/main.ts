import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface SceneStackObj {
  id: string;
  userId: string;
  sceneId: string;
  title: string;
  description: string;
  created: string;
}

export const sceneStackGql = `
type SceneStackObj {
  id: String!
  userId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForSceneStackObj = createContext<SceneStackObj>(
  {} as SceneStackObj,
);

export const exampleSceneStack: SceneStackObj = {
  id: '0',
  sceneId: '0',
  userId: '0',
  title: 'Verses',
  description: 'A collection of some nice verses',
  created: new Date().toISOString(),
};

export const exampleSceneIdeas: SceneStackObj[] = [
  {
    id: '0',
    sceneId: '0',
    userId: '0',
    title: 'Verses',
    description: 'A collection of some nice verses',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    sceneId: '0',
    userId: '0',
    title: 'Verses',
    description: 'A collection of some nice verses',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    sceneId: '0',
    userId: '0',
    title: 'Verses',
    description: 'A collection of some nice verses',
    created: new Date().toISOString(),
  },
];

export const sceneStackModel: ModelInterface<SceneStackObj> = {
  name: 'stack',
  gql: sceneStackGql,
  example: exampleSceneStack,
  examples: exampleSceneIdeas,
  parentKey: 'sceneId',
  children: [],
}