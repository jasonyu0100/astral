import { createContext } from 'react';

export interface AgentObj {
  id: string;
  name: string;
  role: string;
  bio: string;
  created: string;
}

export const agentGql = `
type AgentObj {
	id: String!
  name: String!
  role: String!
  bio: String!
	created: String!
}
`;

export const ContextForAgentObj = createContext<AgentObj>({} as AgentObj);

export const exampleAgent: AgentObj = {
  id: '0',
  name: 'John Smith',
  role: 'Musician',
  bio: 'Been playing for X years',
  created: new Date().toISOString(),
};

export const exampleAgents: AgentObj[] = [
  {
    id: '0',
    name: 'John Smith',
    role: 'Musician',
    bio: 'Been playing for X years',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    name: 'John Smith',
    role: 'Musician',
    bio: 'Been playing for X years',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    name: 'John Smith',
    role: 'Musician',
    bio: 'Been playing for X years',
    created: new Date().toISOString(),
  },
];
