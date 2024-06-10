import { createContext } from 'react';
import { FileElem, exampleDisplayPictureFileElem } from '../elements/file/main';

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
  name: 'John',
  role: 'Musician',
  bio: 'Been playing for X years',
  dp: exampleDisplayPictureFileElem,
  created: new Date().toISOString(),
};

export const exampleAgents: AgentObj[] = [
  {
    id: '0',
    name: 'John',
    role: 'Musician',
    bio: 'Been playing for X years',
    dp: exampleDisplayPictureFileElem,
    created: new Date().toISOString(),
  },
  {
    id: '0',
    name: 'John',
    role: 'Musician',
    bio: 'Been playing for X years',
    dp: exampleDisplayPictureFileElem,
    created: new Date().toISOString(),
  },
  {
    id: '0',
    name: 'John',
    role: 'Musician',
    bio: 'Been playing for X years',
    dp: exampleDisplayPictureFileElem,
    created: new Date().toISOString(),
  },
];
