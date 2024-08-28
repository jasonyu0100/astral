import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface SceneConversationObj {
  id: string;
  userId: string;
  sceneId: string;
  summary: string;
  created: string;
}

export const exampleSceneConversation: SceneConversationObj = {
  id: '0',
  userId: '0',
  sceneId: '0',
  summary: 'A conversation about the idea',
  created: new Date().toISOString(),
};

export const sceneConversationGql = `
type SceneConversationObj {
  id: String!
  userId: String!
  sceneId: String!
  summary: String!
  created: String!
}
`;

export const ContextForSceneConversationObj =
  createContext<SceneConversationObj>({} as SceneConversationObj);

export const exampleSceneConversations: SceneConversationObj[] = [
  {
    id: '0',
    userId: '0',
    sceneId: '0',
    summary: 'Another conversation about the idea',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    sceneId: '0',
    summary: "What's the meaning?",
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    sceneId: '0',
    summary: "What's the meaning?",
    created: new Date().toISOString(),
  },
];

export const sceneConversationModel: ModelInterface<SceneConversationObj> = {
  name: 'conversation',
  gql: sceneConversationGql,
  example: exampleSceneConversation,
  examples: exampleSceneConversations,
  parentKey: 'sceneId',
  children: ['message'],
};
