import { createContext } from 'react';
import { FileElement, exampleFileElement } from '../elements/file/main';
import { ModelInterface } from '../main';

export interface HorizonObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  created: string;
  thumbnail: FileElement;
  category: string;
}

export const horizonGql = `
type HorizonObj {
  id: String!
  userId: String!
  title: String!
  created: String!
  description: String!
  thumbnail: FileElem!
  category: String!
}
`;

export const ContextForHorizonObj = createContext<HorizonObj>({} as HorizonObj);

export const exampleHorizon: HorizonObj = {
  id: '0',
  userId: '0',
  title: 'Horizon Example',
  description: 'Horizon Description',
  created: new Date().toISOString(),
  thumbnail: exampleFileElement,
  category: 'Horizon Category',
};

export const exampleHorizons: HorizonObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    created: new Date().toISOString(),
    thumbnail: exampleFileElement,
    category: 'Horizon Category',
  },
  {
    id: '1',
    userId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    created: new Date().toISOString(),
    thumbnail: exampleFileElement,
    category: 'Horizon Category',
  },
];

export const horizonModel: ModelInterface<HorizonObj> = {
  name: 'horizon',
  gql: horizonGql,
  example: exampleHorizon,
  examples: exampleHorizons,
  parentKey: 'userId',
  children: [],
};
