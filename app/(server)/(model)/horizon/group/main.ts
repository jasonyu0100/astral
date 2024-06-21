import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface HorizonGroupObj {
  id: string;
  horizonId: string;
  parentId?: string;
  title: string;
  description: string;
  created: string;
}

export const horizonGroupGql = `
type HorizonGroupObj {
  id: String!
  horizonId: String!
  parentId: String
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForHorizonGroupObj = createContext<HorizonGroupObj>(
  {} as HorizonGroupObj,
);

export const exampleHorizonGroup: HorizonGroupObj = {
  id: '0',
  horizonId: '0',
  parentId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleHorizonGroups: HorizonGroupObj[] = [
  {
    id: '0',
    horizonId: '0',
    parentId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    parentId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '3',
    horizonId: '0',
    parentId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
];

export const horizonGroupModel: ModelInterface<HorizonGroupObj> = {
  name: 'group',
  gql: horizonGroupGql,
  parentKey: 'horizonId',
  example: exampleHorizonGroup,
  examples: exampleHorizonGroups,
  children: ['update', 'member'],
};
