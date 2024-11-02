import { createContext } from 'react';
import { FileElement } from '../elements/file/main';
import { ModelInterface } from '../main';

export interface AgentObj {
  id: string;
  name: string;
  dp: FileElement;
  role: string;
  bio: string;
  created: string;
}

export const agentGql = `
type AgentObj {
	id: String!
  name: String!
	dp: FileElem!
  role: String!
	created: String!
  bio: String!
}
`;

export const ContextForAgentObj = createContext<AgentObj>({} as AgentObj);

export const exampleAgent: AgentObj = {
  id: '0',
  name: 'Chat GPT',
  role: 'Agent',
  bio: 'Been playing for X years',
  dp: {
    id: '0',
    src: '/llm/1.jpg',
    ext: 'image/jpg',
    title: 'Chat GPT',
    size: 0,
    variant: 'IMAGE',
  },
  created: new Date().toISOString(),
};

export const exampleAgents: AgentObj[] = [
  {
    id: '0',
    name: 'Chat GPT',
    role: 'Agent',
    bio: 'Chat GPT',
    dp: {
      id: '0',
      src: '/llm/1.jpg',
      ext: 'image/jpg',
      title: 'Chat GPT',
      size: 0,
      variant: 'IMAGE',
    },
    created: new Date().toISOString(),
  },
  {
    id: '1',
    name: 'Gemini',
    role: 'Agent',
    bio: 'Gemini',
    dp: {
      id: '0',
      src: '/llm/2.jpg',
      ext: 'image/jpg',
      title: 'Gemini',
      size: 0,
      variant: 'IMAGE',
    },
    created: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Claude',
    role: 'Agent',
    bio: 'Claude',
    dp: {
      id: '0',
      src: '/llm/3.jpg',
      ext: 'image/jpg',
      title: 'Claude',
      size: 0,
      variant: 'IMAGE',
    },
    created: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Palm',
    role: 'Agent',
    bio: 'Palm',
    dp: {
      id: '0',
      src: '/llm/4.jpg',
      ext: 'image/jpg',
      title: 'Palm',
      size: 0,
      variant: 'IMAGE',
    },
    created: new Date().toISOString(),
  },
];

export const agentModel: ModelInterface<AgentObj> = {
  name: 'Agent',
  example: exampleAgent,
  examples: exampleAgents,
  gql: agentGql,
  children: ['collection', 'member'],
  parentKey: '',
};
