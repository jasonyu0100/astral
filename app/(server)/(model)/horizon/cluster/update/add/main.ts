import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ClusterUpdateAddObj {
  id: string;
  updateId: string;
  value: number;
  message: string;
  created: string;
}

export const clusterUpdateAddGql = `
type ClusterUpdateAddObj {
  id: String!
  updateId: String!
  value: Int!
  message: String!
  created: String!
}
`;

export const ContextForClusterUpdateAddObj = createContext<ClusterUpdateAddObj>(
  {} as ClusterUpdateAddObj,
);

export const exampleClusterUpdateAdd: ClusterUpdateAddObj = {
  id: '0',
  updateId: '0',
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleClusterUpdateAdds: ClusterUpdateAddObj[] = [
  {
    id: '0',
    updateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
];

export const clusterUpdateAddModel: ModelInterface<ClusterUpdateAddObj> = {
  name: 'add',
  gql: clusterUpdateAddGql,
  example: exampleClusterUpdateAdd,
  examples: exampleClusterUpdateAdds,
  parentKey: 'updateId',
  children: [],
};
