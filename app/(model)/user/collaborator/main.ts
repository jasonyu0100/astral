import { createContext } from 'react';

export interface UserCollaboratorObj {
  id: string;
  userId: string;
  collaboratorId: string;
  created: string;
}

export const userCollaboratorGql = `
type UserCollaboratorObj {
  id: String!
  userId: String!
  collaboratorId: String!
  created: String!
}
`;

export const ContextForUserCollaboratorObj = createContext<UserCollaboratorObj>(
  {} as UserCollaboratorObj,
);

export const exampleUserCollaborator: UserCollaboratorObj = {
  id: '0',
  collaboratorId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleUserCollaborators: UserCollaboratorObj[] = [
  {
    id: '0',
    collaboratorId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    collaboratorId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    collaboratorId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];
