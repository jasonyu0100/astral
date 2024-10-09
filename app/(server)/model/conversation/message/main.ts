import { FileElem } from '@/(server)/model/elements/file/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';
export interface ConversationMessageObj {
  id: string;
  userId?: string;
  agentId?: string;
  conversationId: string;
  sceneId: string;
  created: string;
  message: string;
  hasAttachment: boolean;
  variant?: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
}

export const conversationMessageGql = `
type ConversationMessageObj {
  id: String!
  userId: String
  agentId: String
  conversationId: String!
  sceneId: String!
  created: String!
  message: String!
  hasAttachment: Boolean!;
  variant: String
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
}
`;

export const ContextForConversationMessageObj =
  createContext<ConversationMessageObj>({} as ConversationMessageObj);

export const exampleConversationMessage: ConversationMessageObj = {
  id: '0',
  conversationId: '0',
  sceneId: '0',
  userId: '0',
  agentId: undefined,
  created: new Date().toISOString(),
  message: 'Hello World',
  hasAttachment: false,
};

export const exampleAgentConversationMessage: ConversationMessageObj = {
  id: '1',
  conversationId: '0',
  sceneId: '0',
  userId: undefined,
  agentId: '0',
  created: new Date().toISOString(),
  message: 'Hello World',
  hasAttachment: false,
};

export const exampleConversationMessages: ConversationMessageObj[] = [
  {
    id: '0',
    sceneId: '0',
    conversationId: '0',
    userId: '0',
    agentId: undefined,
    created: new Date().toISOString(),
    message: 'Test Message',
    hasAttachment: false,
  },
  {
    id: '1',
    sceneId: '0',
    conversationId: '0',
    userId: undefined,
    created: new Date().toISOString(),
    message: 'Hello World',
    hasAttachment: false,
  },
  {
    id: '2',
    sceneId: '0',
    conversationId: '0',
    userId: '0',
    agentId: undefined,
    created: new Date().toISOString(),
    message: 'Hello There',
    hasAttachment: false,
  },
];

export const conversationMessageModel: ModelInterface<ConversationMessageObj> =
  {
    name: 'message',
    gql: conversationMessageGql,
    example: exampleConversationMessage,
    examples: exampleConversationMessages,
    parentKey: 'conversationId',
    children: [],
  };
