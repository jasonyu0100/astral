import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface IdeaSceneObj {
  id: string;
  userId: string;
  chapterId?: string;
  arcId?: string;
  title: string;
  summary: string;
  objective: string;
  created: string;
}

export const ideaSceneGql = `
type IdeaSceneObj {
  id: String!
  userId: String!
  chapterId: String
  arcId: String
  title: String!
  summary: String!
  objective: String!
  created: String!
}
`;

export const ContextForIdeaSceneObj = createContext<IdeaSceneObj>(
  {} as IdeaSceneObj,
);

export const exampleIdeaScene: IdeaSceneObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  arcId: '0',
  title: 'Idea Scene',
  objective: 'Scene Description',
  summary: 'Scene Summary',
  created: new Date().toISOString(),
};

export const exampleIdeaScenes: IdeaSceneObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    arcId: '0',
    title: 'Idea Scene 1',
    objective: 'Scene Description',
    summary: 'Scene Summary',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    arcId: '0',
    title: 'Idea Scene 2',
    objective: 'Scene Description',
    summary: 'Scene Summary',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    arcId: '0',
    title: 'Idea Scene 3',
    objective: 'Scene Description',
    summary: 'Scene Summary',
    created: new Date().toISOString(),
  },
];

export const ideaSceneModel: ModelInterface<IdeaSceneObj> = {
  name: 'scene',
  gql: ideaSceneGql,
  example: exampleIdeaScene,
  examples: exampleIdeaScenes,
  parentKey: 'chapterId',
  children: ['idea'],
};
