import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface SpaceMemberObj {
  id: string;
  spaceId: string;
  userId: string;
  created: string;
  formId: string;
}

export const spaceMemberGql = `
type SpaceMemberObj {
  id: String!
  spaceId: String!
  userId: String!
  created: String!
  formId: String!
}
`;

export const ContextForSpaceMemberObj = createContext<SpaceMemberObj>(
  {} as SpaceMemberObj,
);

export const exampleSpaceMember: SpaceMemberObj = {
  id: '0',
  spaceId: '0',
  userId: '0',
  created: new Date().toISOString(),
  formId: '0',
};

export const exampleSpaceMembers: SpaceMemberObj[] = [
  {
    id: '0',
    spaceId: '0',
    userId: '0',
    created: new Date().toISOString(),
    formId: '0',
  },
  {
    id: '0',
    spaceId: '0',
    userId: '0',
    created: new Date().toISOString(),
    formId: '0',
  },
  {
    id: '0',
    spaceId: '0',
    userId: '0',
    created: new Date().toISOString(),
    formId: '0',
  },
];

export const spaceMemberModel: ModelInterface<SpaceMemberObj> = {
  name: 'member',
  gql: spaceMemberGql,
  example: exampleSpaceMember,
  examples: exampleSpaceMembers,
  parentKey: 'spaceId',
  children: [],
};
