import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface DecisionQuadrantMemberObj {
  id: string;
  quadrantId: string; // Updated to quadrantId
  userId: string;
  created: string; // Updated to created
}

export const decisionQuadrantMemberGql = `
type DecisionQuadrantMemberObj {
  id: String!
  quadrantId: String!  // Updated to quadrantId
  userId: String!
  created: String!     // Updated to created
}
`;

export const ContextForDecisionQuadrantMemberObj =
  createContext<DecisionQuadrantMemberObj>({} as DecisionQuadrantMemberObj);

export const exampleDecisionQuadrantMember: DecisionQuadrantMemberObj = {
  id: '0',
  quadrantId: '0', // Updated to quadrantId
  userId: '0',
  created: new Date().toISOString(), // Updated to created
};

export const exampleDecisionQuadrantMembers: DecisionQuadrantMemberObj[] = [
  {
    id: '0',
    quadrantId: '0', // Updated to quadrantId
    userId: '0',
    created: new Date().toISOString(), // Updated to created
  },
  {
    id: '1',
    quadrantId: '0', // Updated to quadrantId
    userId: '1',
    created: new Date().toISOString(), // Updated to created
  },
];

export const decisionQuadrantMemberModel: ModelInterface<DecisionQuadrantMemberObj> =
  {
    name: 'member',
    gql: decisionQuadrantMemberGql,
    example: exampleDecisionQuadrantMember,
    examples: exampleDecisionQuadrantMembers,
    parentKey: 'quadrantId', // Updated to quadrantId
    children: [],
  };
