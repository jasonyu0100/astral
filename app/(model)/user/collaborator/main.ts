import { createContext } from 'react';

export interface UserCollaboratorObj {
  id: string;
  userId: string;
  collaboratorId: string;
}

export const userCollaboratorGql = `
type UserCollaboratorObj {
  id: String!
  userId: String!
  collaboratorId: String!
}
`;

export const UserCollaboratorObjContext = createContext<UserCollaboratorObj>(
  {} as UserCollaboratorObj,
);

export const exampleUserCollaborator: UserCollaboratorObj = {
  id: '0',
  collaboratorId: '0',
  userId: '0',
};

export const exampleUserCollaborators: UserCollaboratorObj[] = [
  {
    id: '0',
    collaboratorId: '0',
    userId: '0',
  },
  {
    id: '0',
    collaboratorId: '0',
    userId: '0',
  },
  {
    id: '0',
    collaboratorId: '0',
    userId: '0',
  },
];
