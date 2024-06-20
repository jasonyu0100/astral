import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ClusterUpdateObj {
  id: string;
  clusterId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const clusterUpdateGql = `
type ClusterUpdateObj {
  id : String!
  clusterId : String!
  userId: String!
  title : String!
  description : String!
  created: String!
}
`;

export const ContextForClusterUpdateObj = createContext<ClusterUpdateObj>(
  {} as ClusterUpdateObj,
);

export const exampleClusterUpdate: ClusterUpdateObj = {
  id: '0',
  clusterId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleClusterUpdates: ClusterUpdateObj[] = [
  {
    id: '0',
    clusterId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    clusterId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    clusterId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
];

export const clusterUpdateModel: ModelInterface<ClusterUpdateObj> = {
  name: 'update',
  example: exampleClusterUpdate,
  gql: clusterUpdateGql,
  examples: exampleClusterUpdates,
  parentKey: 'clusterId',
  children: ['item', 'member'],
};
