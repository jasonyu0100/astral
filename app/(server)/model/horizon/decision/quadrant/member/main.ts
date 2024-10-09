import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface QuadrantMemberObj {
  id: string;
  quadrantId: string;
  userId: string;
  created: string;
}

export const quadrantMemberGql = `
type QuadrantMemberObj {
  id: String!
  quadrantId: String!
  userId: String!
  created: String!
}
`;

export const ContextForQuadrantMemberObj = createContext<QuadrantMemberObj>(
  {} as QuadrantMemberObj,
);

export const exampleQuadrantMember: QuadrantMemberObj = {
  id: '0',
  quadrantId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleQuadrantMembers: QuadrantMemberObj[] = [
  {
    id: '0',
    quadrantId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    quadrantId: '0',
    userId: '1',
    created: new Date().toISOString(),
  },
];

export const quadrantMemberModel: ModelInterface<QuadrantMemberObj> = {
  name: 'member',
  gql: quadrantMemberGql,
  example: exampleQuadrantMember,
  examples: exampleQuadrantMembers,
  parentKey: 'quadrantId',
  children: [],
};
