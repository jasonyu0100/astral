import { ModelInterface } from '@/architecture/model/main';
import { createContext } from 'react';

export interface HorizonDecisionObj {
  id: string;
  horizonId: string;
  title: string;
  description: string;
  created: string;
}

export const horizonDecisionGql = `
type HorizonDecisionObj {
  id: String!
  horizonId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForHorizonDecisionObj = createContext<HorizonDecisionObj>(
  {} as HorizonDecisionObj,
);

export const exampleHorizonDecisionObj: HorizonDecisionObj = {
  id: '0',
  horizonId: '0',
  title: 'Key Strategy Decision',
  description: 'This decision focuses on our approach to scaling.',
  created: new Date().toISOString(),
};

export const exampleHorizonDecisionsList: HorizonDecisionObj[] = [
  {
    id: '0',
    horizonId: '0',
    title: 'Key Strategy Decision',
    description: 'This decision focuses on our approach to scaling.',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    title: 'Budget Allocation',
    description: 'Deciding how to allocate budget across departments.',
    created: new Date().toISOString(),
  },
];

export const horizonDecisionModel: ModelInterface<HorizonDecisionObj> = {
  name: 'decision',
  gql: horizonDecisionGql,
  example: exampleHorizonDecisionObj,
  examples: exampleHorizonDecisionsList,
  parentKey: 'horizonId',
  children: ['quadrant'],
};
