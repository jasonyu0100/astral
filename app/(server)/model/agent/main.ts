import { createContext } from 'react';
import { FileElem } from '../elements/file/main';
import { ModelInterface } from '../main';

export interface AgentObj {
  id: string;
  name: string;
  dp: FileElem;
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
    src: '/agents/chatgpt.jpg',
    ext: 'image/png',
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
    bio: 'Been playing for X years',
    dp: {
      id: '0',
      src: '/agents/chatgpt.jpg',
      ext: 'image/png',
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
    bio: 'Been playing for X years',
    dp: {
      id: '0',
      src: '/agents/gemini.webp',
      ext: 'image/webp',
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
    bio: 'Been playing for X years',
    dp: {
      id: '0',
      src: '/agents/claude.svg',
      ext: 'image/svg',
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
    bio: 'Been playing for X years',
    dp: {
      id: '0',
      src: '/agents/palm.png',
      ext: 'image/png',
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
